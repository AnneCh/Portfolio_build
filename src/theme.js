//EN TRAVAUX

import { createTheme } from '@mui/material/styles';

/**creation of a theme esthetically basic, dark mode by default with option to switch
 dark mode will be modified if possible to get purple tones

 I should create several themes for each page
 - the Enter page has "Hi, I'm Anne" on the background
*/
// creation of theme options, I will first create different options depending on the page

const LightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(131,108,173,0.53)',
      light: 'rgba(176,150,220,0.53)',
      dark: 'rgba(72,13,123,0.67)',
    },
    secondary: {
      main: 'rgba(5,7,76,0.8)',
      contrastText: '#ffffff',
    },
    info: {
      main: '#4e5ee8',
    },
    background: {
      default: '#e3d9ee',
      paper: 'rgba(77,18,107,0.15)',
    },
    error: {
      main: '#f71a05',
    },
    text: {
      primary: 'rgba(0,0,0,0.95)',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
    overline: {
      fontFamily: 'Droid Sans',
    },
  },
});
const DarkDefaultTheme = createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(128,102,168,0.91)',
      light: 'rgba(239,232,245,0.8)',
      dark: 'rgba(26,4,47,0.67)',
    },
    secondary: {
      main: 'rgba(33,39,218,0.8)',
      contrastText: '#ffffff',
    },
    info: {
      main: '#78909c',
    },
    background: {
      default: 'rgba(19,6,30,0.95)',
      paper: 'rgba(120,144,156,0.56)',
    },
    error: {
      main: '#f71a05',
    },
    text: {
      primary: '#e7f8fd',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
    overline: {
      fontFamily: 'Droid Sans',
    },
  },
});

export { LightTheme, DarkDefaultTheme };