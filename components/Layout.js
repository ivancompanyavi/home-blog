import styled, { ThemeProvider } from 'styled-components'

import theme from './theme'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
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
