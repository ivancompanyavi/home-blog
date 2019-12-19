import styled from 'styled-components'

import { device } from '../data/theme'
import PostCard from './PostCard'

const Wrapper = styled.main`
  padding: ${props => props.theme.spacing.m};
  grid-area: main;
  background-color: ${({ theme }) => theme.color.secondary};
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.mobileL} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Main = ({ posts }) => (
  <Wrapper>
    { posts.map(post => <PostCard post={post} />) }
  </Wrapper>
)

export default Main
