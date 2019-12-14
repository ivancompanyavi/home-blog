import { NextPageContext } from 'next'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const Blog = ({ post }) => {
  return (
    <p>{post.content}</p>
  )
}

Blog.getInitialProps = async (context: NextPageContext) => {
  const post = await import(`../../posts/${context.query.slug}.md`)
  const data = await import ('../../data/config.json')
  const document = matter(post.default)
  console.log(document)
  return {
    post: document,
    data,
  }

}

export default Blog
