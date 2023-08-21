import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { blue, pink } from "@mui/material/colors";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appTheme = createTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      {/* <App /> */}
      <></>
    </ThemeProvider>
  </React.StrictMode>
);

