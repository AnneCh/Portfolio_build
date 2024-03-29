import { red } from "@mui/material/colors";

export const CardStyle = () => ({
    card: {
      maxWidth: "auto",
      color: red,
      display: "flex",
      margin: "auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    media: {
      height:"100px",
      width: "100px",
      paddingTop: "56.25%",
      padding:"20%"
    },
    content: {
      textAlign: "left",
      padding: '10px'
    },
    divider: {
      margin: '10px'
        },
    heading: {
      fontWeight: "bold",
      fontFamily: "Tangerine",
    },
    subheading: {
      lineHeight: 1.2
    },
  });