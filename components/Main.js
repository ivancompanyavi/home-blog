import Link from 'next/link'
import matter from 'gray-matter'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.m};
  grid-area: main;
  background-color: ${({ theme }) => theme.color.primary};
`

const Main = ({ posts }) => (
  <Wrapper>
    { posts.map(({ document, slug}) => {
      return (
      <Link href={`/posts/${slug}`}>
        <a>{document.data.title}</a>
      </Link>
      )
    }) }
  </Wrapper>
)

export default Main
