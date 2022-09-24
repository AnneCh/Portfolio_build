import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';
import Card from './Cards/CardTemplate';
import {topics} from './data'

function Others() {
  const { t } = useTranslation()
  //return a mapping of the card data into a CardTemplate object
  const others = topics.map((item) => {
    return(
        <Card
        img={item.image}
        title={item.title}
        more={item.link}
        />
    )
  })
  return (
    <Box sx={{textAlign:'center', margin:8,fontSize:30}}>
      <h3>{t('what_else.intro')}</h3>
        <Box sx={{paddingLeft:10, margin:8}}>
          {others}<br/>
        </Box>
    </Box>
  );
}

export default Others