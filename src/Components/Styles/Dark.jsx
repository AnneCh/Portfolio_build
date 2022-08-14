import theme from "react"

export const darkTheme = {
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
        primary: 'rgba(246,202,250,0.53)',
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

    components:{
      MuiAppBar:{
        styleOverrides: {
          root: {
            width:"100%",
          }
      }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            width:"100%",
            background: 'rgba(26,4,47,0.67)',
            position: 'static',
            minHeight: '86px',
            padding: '0px 10px',
          }
        }
      },
      MuiCard: {
        styleOverrides: {
            root:{
              color: 'rgba(202,163,228,0.8)',
              display: "flex",
              transition: "0.3s",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              "&:hover": {
                boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
              }
            }
        }
      },
    },
    spacing:2,
}