import theme from "react"
import { red } from "@mui/material/colors"
import { Redeem } from "@mui/icons-material"

export const lightTheme = {
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
        default: 'rgba(204, 174, 210, 0.23)',
      },
      error: {
        main: '#f71a05',
      },
      text: {
        primary: 'rgba(12,16,55,0.79)',
        secondary: 'rgba(12,33,94,0.79)',
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
      MuiGrid:{
        styleOverrides: {
            root:{
            container: true,
            background: red,
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth:"auto",
            columns:4,
            columnSpacing: 2,
          }}
        },
      MuiPaper:{
        styleOverrides: {
          root:{
            background: red,
          }
        }
      },
      MuiButton:{
        styleOverrides: {
          root: {
            width:"50%",
            textDecoration:'none',
          },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            width:"100%",
            display:"flex",
            background:'rgba(204, 174, 210, 0.23)',
            position: 'static',
            minHeight: '86px',
            alignItems: 'space-between',
            padding: '0px 10px',
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
            root:{
              color: 'rgba(204, 174, 210, 0.23)',
              display: "flex",
              transition: "0.3s",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              "&:hover": {
                boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
              }
            }
          },
          spacing: 2,
      }
    }
  }
}