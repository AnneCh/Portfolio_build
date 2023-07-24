import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';

function Writing() {
  const { t } = useTranslation()

  return (
    <Container sx={{textAlign:'left', margin:8,fontSize:'auto'}}>
      <Typography sx={{}}>{t('writing.pro')}</Typography>
      <Typography sx={{}}>{t('writing.diverse')}</Typography>
      <Typography sx={{}}>{t('writing.mindset')}</Typography>

    </Container>
  );
}

export default Writing