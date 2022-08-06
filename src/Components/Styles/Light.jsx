import theme from "react"
import { red } from "@mui/material/colors"

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
        default: 'rgba(252, 247, 251,0.95)',
        paper: red,
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
    props: {
      MuiAppBar: {
        color: 'secondary',
      },
      MuiCard:{
        card: {
          background:red,
          color: red,
          bgColor: red,
          backgroundColor: red,
          maxWidth: "auto",
          display: "flex",
          margin: "auto",
          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
          }
        },
        media: {
          height:"150px",
          width: "150px",
          paddingTop: "56.25%",
          padding:"80%"
        },
        content: {
          textAlign: "left",
          padding: 3
        },
        divider: {
          margin: `${3}px 0`
        },
        heading: {
          fontWeight: "bold",
          fontFamily: "Tangerine",
        },
        subheading: {
          lineHeight: 1.8
        },
      }
    },
    spacing: 2,
}