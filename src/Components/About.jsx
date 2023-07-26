import { Box, Container } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';
import BackButton from "./BackButton";

function About() {
  const { t } = useTranslation()

  return (
    <Container>
      <Box>
        <BackButton/>
      </Box>
      <Box sx={{textAlign:'center', margin:8,fontSize:30}}>
      </Box>
    </Container>
  );
}

export default About