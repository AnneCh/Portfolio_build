import React from "react";
import { Grid } from '@mui/material';
import Health from "./Cards/HealthCard";
import MartialArts from "./Cards/MartialCard";
import MusicCard from "./Cards/MusicCard";
import { useTranslation } from 'react-i18next';

function Others() {
  const { t } = useTranslation()
     return (
      <div>
        <h3>{t('what_else.intro')}</h3>
        <Grid container>
          <Grid item xs={12} md={8} xl={3}>
            <Health/>
          </Grid>
          <Grid item xs={12} md={8} xl={3}>
            <MartialArts/>
          </Grid>
          <Grid item xs={12} md={8} xl={3}>
            <MusicCard/>
          </Grid>
        </Grid>
      </div>
    );
}

export default Others