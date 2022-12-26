import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from 'Theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App /> 
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
