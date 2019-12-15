import matter from 'gray-matter'

import Layout from '../components/Layout'
import Main from '../components/Main'

const Index = ({ config, posts }) => (
  <Layout config={config}>
      <Main posts={posts} />
  </Layout>
)

Index.getInitialProps = async () => {
  const config = await import('../data/config.json')
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return { document, slug }
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
