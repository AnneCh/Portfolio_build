import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';
import ProjectTemplate from './Cards/ProjectsTemplate';
import {projects} from './data.js'

export default function Projects() {
  const { t } = useTranslation()
  const project = projects.map((item) => {
    return(
        <ProjectTemplate
        img={item.image}
        title={item.title}
        more={item.link}
        />
    )
  })
  return (
    <Box sx={{textAlign:'center', margin:8,fontSize:30}}>
      <h3>{t('main_mul.projects')}</h3>
        <Box sx={{paddingLeft:10, margin:8}}>
          {project}<br/>
        </Box>
    </Box>
  );
}