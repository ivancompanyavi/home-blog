import Link from 'next/link'
import styled from 'styled-components'

import TwitterLogo from '../public/logo-twitter.svg'
import InstagramLogo from '../public/logo-instagram.svg'
import FacebookLogo from '../public/logo-facebook.svg'
import { device } from '../data/theme'


const Wrapper = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.color.primary};
  display: flex;
  padding: 0 50px;
`

const Menu = styled.div`
  display: none;
  @media ${device.laptop} {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.spacing.xl};
  }

`

const Title = styled.h1`
  flex: 1;
  font-size: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    text-shadow: 0 0 5px ${({theme}) => theme.color.primaryDark};
  }
`

const Logo = styled.div`
  margin-right: 20px;
  & svg {
    fill: white;
    width: 30px;
  }
`

const Contact = styled.div`
  display: none;

  @media ${device.laptop} {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

const renderLogo = (logo, link, label) => {
  return (
    <Logo>
      <a href={link} target="_blank" aria-label={`${label} logo`}>
        {<span dangerouslySetInnerHTML={{__html: logo}} />}
      </a>
    </Logo>
  )
}

const Header = ({ config }) => (
  <Wrapper>
    <Menu>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Menu>
    <Link href="/">
      <Title aria-label="Blog name" >{config.title}</Title>
    </Link>
    <Contact>
      { renderLogo(TwitterLogo, config.social.twitter, 'Twitter') }
      { renderLogo(InstagramLogo, config.social.instagram, 'Instagram') }
      { renderLogo(FacebookLogo, config.social.facebook, 'Facebook') }
    </Contact>
  </Wrapper>
);

export default Header;
