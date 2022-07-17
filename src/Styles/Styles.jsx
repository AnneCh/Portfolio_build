import { useState, useMemo } from "react";
import ReactSwitch from "react-switch";

const light = React.useMemo(
  () =>
    createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(128,102,168,0.91)',
      light: 'rgba(202,163,228,0.8)',
      dark: 'rgba(26,4,47,0.67)',
    },
    secondary: {
      main: 'rgba(67,26,179,0.8)',
      contrastText: '#dcd7f5',
      light: 'rgba(126,90,216,0.8)',
      dark: 'rgba(37,12,111,0.8)',
    },
    info: {
      main: '#5e6db9',
    },
    background: {
      default: 'rgba(224,203,245,0.95)',
      paper: 'rgba(120,144,156,0.56)',
    },
    error: {
      main: '#f71a05',
    },
    text: {
      primary: '#e7f8fd',
      secondary: 'rgba(72,13,94,0.79)',
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
  direction: 'rtl',
  }),
  [mode],
)

const dark = React.useMemo(
  () =>
    createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(128,102,168,0.91)',
      light: 'rgba(202,163,228,0.8)',
      dark: 'rgba(26,4,47,0.67)',
    },
    secondary: {
      main: '#16161e',
      contrastText: '#dcd7f5',
      light: 'rgba(126,90,216,0.8)',
      dark: 'rgba(30,20,63,0.8)',
    },
    info: {
      main: '#b9a45e',
    },
    background: {
      default: 'rgba(33,5,55,0.51)',
      paper: 'rgba(4,4,41,0.44)',
    },
    error: {
      main: '#f71a05',
    },
    text: {
      primary: '#e6e6e6',
      secondary: 'rgba(206,123,184,0.53)',
      disabled: 'rgba(88,75,75,0.5)',
    },
    warning: {
      main: '#ff3e00',
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
  direction: 'rtl',
  props: {
    MuiAppBar: {
      color: 'secondary',
    },
  },
})
  [mode],
)

function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  }

export const ThemeContext = createContext(null);


export default function NightToggle() {

    return(
        <ReactSwitch onChange={ToggleColorMode} checked={theme === "dark"}/>
    )
}

