import { Box, Typography, Grid, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/youtube';
import BackButton from './BackButton';

const traits = [
  {
    title: 'tagline',
    paragraph1: 'trait1.origins',
    paragraph2: 'trait1.studies',
  },
  {
    title: 'trait2.title',
    paragraph1: 'trait2.music',
    paragraph2: 'trait2.ethno',
  },
  {
    title: 'trait3.title',
    paragraph1: 'trait3.martial',
    paragraph2: 'trait3.arts',
  },
  {
    title: 'trait4.title',
    paragraph1: 'trait4.dao',
    paragraph2: 'trait4.adept',
  },
  // Add more traits...
];
function Jim() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div>Loading...</div>;  // Or some loading spinner
  }

  return (
    <Box sx={{ textAlign: 'center', margin: 'auto', marginTop: '4rem' }}>
      <BackButton/>
      <Typography variant="h2" gutterBottom>{t('jim.tagline')}</Typography>
      <Typography variant="h4" component="h1">{t('jim.description')}</Typography>     
      <Grid container spacing={3}>
        {traits.map((trait, index) => (
          <Grid item xs={12} sx={{ width: '100%' }} key={index}>
            <Paper sx={{ padding: 3, margin: 1 }}>
            <Typography variant="h5" gutterBottom>
                {t(`jim.${trait.title}`)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t(`jim.${trait.paragraph1}`)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {t(`jim.${trait.paragraph2}`)}
              </Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} sx={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" gutterBottom>{t('jim.videoTitle')}</Typography>
          <ReactPlayer url="https://www.youtube.com/watch?v=52Vxo_f4IhA" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Jim;
