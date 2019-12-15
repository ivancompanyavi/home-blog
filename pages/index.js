import Link from 'next/link'
import matter from 'gray-matter'
import styled, { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Main from '../components/Main'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html, body {
    width: 100vw;
    height: 100vh;
    font-family: Open Sans;
    color: ${({theme}) => theme.color.text};
  }
  #__next {
    height: 100%;
  }
`

const Index = ({ config, posts }) => (
  <Layout>
    <GlobalStyle />
      <Header config={config} />
      <Main posts={posts} />
  </Layout>
)

Index.getInitialProps = async () => {
  const config = await import('../data/config.json')
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys()
    // grab the values from these files
    const values = keys.map(context)
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      // get the current file value
      const value = values[index]
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default)
      // return the .md content & pretty slug
      return {
        document,
        slug,
      }
    })
    // return all the posts
    return data
  })(require.context('../posts', true, /\.md$/))
  return {
    config,
    posts,
  }
}

export default Index
