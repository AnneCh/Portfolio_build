import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';
import BackButton from "./BackButton";


function Jim() {
  const { t } = useTranslation()

  return (
    <Box sx={{textAlign:'center', margin:8,fontSize:30}}>
      <BackButton/>
    </Box>
  );
}

export default Jim