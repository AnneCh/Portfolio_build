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
        description={item.description}
        more={item.link}
        />
    )
  })
  return (
    <Box sx={{textAlign:'center', margin:10, fontSize:30}}>
      <h3>{t('what_else.intro')}</h3>
        {others}
    </Box>
  );
}

export default Others