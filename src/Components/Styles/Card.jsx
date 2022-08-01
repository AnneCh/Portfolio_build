export const CardStyle = muiBaseTheme => ({
    card: {
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
      padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
      margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
      fontWeight: "bold",
      fontFamily: "Tangerine",
    },
    subheading: {
      lineHeight: 1.8
    },
  });