import styled from 'styled-components'

const Wrapper = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.color.primaryDark};
`

const Header = ({ title }) => (
  <Wrapper>
    <h1>{title}</h1>
  </Wrapper>
);

Header.getInitialProps = async () => {
  const configData = await import('../data/config.json')
  return { ...configData }
}

export default Header;
