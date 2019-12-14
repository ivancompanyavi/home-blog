import styled, { ThemeProvider } from 'styled-components'

import theme from './theme'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr 100px;
  grid-template-areas:
    "header header"
    "main side";
  height: 100%;
`

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      {props.children}
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
