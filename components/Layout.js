import styled, { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import theme from '../data/theme'
import Header from './Header'

import 'highlightjs/styles/default.css'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html, body {
    width: 100vw;
    height: 100vh;
    font-family: Open Sans;
    color: ${({theme}) => theme.color.text};
  }
  #__next {
    height: 100%;
  }
`

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
    <GlobalStyle />
    <Wrapper>
      <Header config={props.config} />
      {props.children}
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
