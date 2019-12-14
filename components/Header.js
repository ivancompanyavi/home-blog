import styled from 'styled-components'

const Wrapper = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.color.primaryDark};
  display: grid;
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

const Contact = styled.div`
  flex: 1;
`

const Header = ({ title }) => (
  <Wrapper>
    <Menu />
    <Title>{title}</Title>
    <Contact>
    </Contact>
  </Wrapper>
);

export default Header;
