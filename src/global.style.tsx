import { createGlobalStyle } from 'styled-components'
import { COLORS } from './utils/styles/style'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;

    main {
      height: 100%;

      display: flex;
      place-content: center;
      place-items: center;

      padding: 2rem;
    }
  }
`