import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeOptions } from '@mui/material';
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'; 
import { ThemeOptions } from '@mui/material/styles';


 const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b53f9d',
      contrastText: '#d60ed6',
    },
    secondary: {
      main: 'rgba(184,0,245,0.49)',
    },
    error: {
      main: '#7b03a8',
    },
    warning: {
      main: '#ed029b',
    },
    info: {
      main: 'rgba(165,2,209,0.86)',
    },
    success: {
      main: 'rgba(117,46,125,0.96)',
    },
    background: {
      paper: '#121212',
    },
    text: {
      hint: '#715dc9',
    },
  },
  typography: {
    h5: {
      fontSize: '1.4rem',
    },
    h6: {
      fontWeight: 300,
    },
    button: {
      fontFamily: 'Droid Sans',
      fontWeight: 500,
      lineHeight: 1.59,
      letterSpacing: '0.26em',
      fontSize: '1.1rem',
    },
    fontWeightRegular: 300,
    fontWeightMedium: 700,
    fontWeightBold: 500,
    htmlFontSize: 18,
    h1: {
      fontFamily: 'PT Sans',
      fontSize: '4rem',
      lineHeight: 1.51,
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<CssBaseline />
<ThemeProvider theme={theme}>
<Provider store={store}>
<App />
</Provider>
</ThemeProvider>
</React.StrictMode>
);

//Judit Mendoza Santana