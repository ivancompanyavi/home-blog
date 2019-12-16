import Link from 'next/link'
import styled from 'styled-components'

import TwitterLogo from '../public/logo-twitter.svg'
import InstagramLogo from '../public/logo-instagram.svg'
import FacebookLogo from '../public/logo-facebook.svg'


const Wrapper = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.color.primary};
  display: flex;
`

const Menu = styled.div`
  flex: 1;
`

const Title = styled.h1`
  flex: 1;
  font-size: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`

const Logo = styled.div`
  margin-right: 20px;
  & svg {
    fill: white;
    width: 30px;
  }

  &:last-of-type { 
    padding-right: 50px;
  }
`

const Contact = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
    <Menu />
    <Title aria-label="Blog name">{config.title}</Title>
    <Contact>
      { renderLogo(TwitterLogo, config.social.twitter, 'Twitter') }
      { renderLogo(InstagramLogo, config.social.instagram, 'Instagram') }
      { renderLogo(FacebookLogo, config.social.facebook, 'Facebook') }
    </Contact>
  </Wrapper>
);

export default Header;
