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
  .ant-notification {
    .ant-notification-topRight {
      right: 19rem;
      top: 5rem;
    }
  }

  .ant-notification-notice {
    &.notification {
      margin: 0;

      &.success {
        background-color: #065806;

        .ant-notification-notice-content {
          .ant-notification-notice-message {
            color: #fff;
            margin: 0;
          }
        }
      }
      
      .ant-notification-notice-content {
        display: flex;
        align-items: center;

        .ant-notification-notice-message {
          margin: 0;
          padding: 0;
          font-size: .75rem;

          display: flex;
          align-content: center;
          justify-content: center;
      }

      .ant-notification-notice-close {
        display: none;
      }
    }
  }
}
`