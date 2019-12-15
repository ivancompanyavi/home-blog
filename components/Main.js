import styled from 'styled-components'

import PostCard from './PostCard'

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.m};
  grid-area: main;
  background-color: ${({ theme }) => theme.color.secondary};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Main = ({ posts }) => (
  <Wrapper>
    { posts.map(post => <PostCard post={post} />) }
  </Wrapper>
)

export default Main
