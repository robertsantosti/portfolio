import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { ErrorProvider } from './contexts/Error/Error.context.tsx';
import { AlertModalProvider } from './contexts/Modal/AlertModal/AlertModal.context';
import { GlobalStyle } from './global.style.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
      <AlertModalProvider>
        <ErrorProvider>
            <App />
        </ErrorProvider>
      </AlertModalProvider>
  </React.StrictMode>
)
