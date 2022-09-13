import React from "react";
// import { Grid } from '@mui/material';
// import Health from "./Cards/HealthCard";
// import MartialArts from "./Cards/MartialCard";
// import MusicCard from "./Cards/MusicCard";
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
    <div>
      <h3>{t('what_else.intro')}</h3>
        {others}
    </div>
  );
}

export default Others