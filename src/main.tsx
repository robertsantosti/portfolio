import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './global.style.tsx'
import { ErrorProvider } from './contexts/Error/Error.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>

    <ErrorProvider>
      <App />
    </ErrorProvider>
  </React.StrictMode>,
)
