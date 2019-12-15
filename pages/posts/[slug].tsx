import { NextPageContext } from 'next'
import matter from 'gray-matter'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'

const Content = styled.div`
  color: black;
  padding: ${({theme}) => theme.spacing.l};
`

const Title = styled.h1`
  text-align: center;
`

const Blog = ({ config, post }) => {
  return (
    <Layout config={config}>
      <Content>
        <Title>{post.data.title}</Title>
        <ReactMarkdown
          source={post.content}
          renderers={{code: CodeBlock}}
        />
      </Content>
    </Layout>
  )
}

Blog.getInitialProps = async (context: NextPageContext) => {
  const post = await import(`../../posts/${context.query.slug}.md`)
  const config = await import ('../../data/config.json')
  const document = matter(post.default)
  return {
    post: document,
    config,
  }

}

export default Blog
