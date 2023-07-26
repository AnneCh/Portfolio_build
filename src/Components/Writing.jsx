import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';

function Writing() {
  const { t } = useTranslation()

  return (
    <Container sx={{textAlign:'center', margin:'auto', marginTop:'4rem',}} maxWidth={false}>
      <Typography sx={{fontSize:"2rem"}}>{t('writing.pro')}</Typography><br/>
      <Typography sx={{fontSize:"4rem"}}>{t('writing.diverse')}</Typography><br/><br/>
      <Typography sx={{fontSize:"3rem"}}>{t('writing.mindset')}</Typography>
      <br/>
      <Typography sx={{fontSize:"2rem"}}>We also provide <a target="blank" href="https://drive.google.com/file/d/1Z7Wsi1LAbRqoTLW8QZA8-ryaHQw2qtKk/view?usp=sharing">redactions</a> and translations to and from French.</Typography>
      <br/>
      <Typography sx={{ fontSize: "3rem", textShadow: '2px 2px 4px rgba(10, 10, 10, 0.5)' }}>
        Click <a target="_blank" href="https://kevinbahler.notion.site/Portfolio-03d694dc2708469581a9f77d5cb7dbd3">here</a> to see some of the things we've written.
      </Typography>
    </Container>
  );
}

export default Writing