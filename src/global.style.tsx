import { createGlobalStyle } from 'styled-components'
import { COLORS } from './utils/styles/style'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url('images/app-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: ${COLORS.$white};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`