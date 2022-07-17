export default function lightTheme() { React.useMemo(
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
}