import { Box, Typography, Grid, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BackButton from './BackButton';
import ReactPlayer from 'react-player/youtube';

const traits = [
  {
    title: 'tagline',
    paragraph1: 'trait1.origins',
    paragraph2: 'trait1.studies',
  },
  {
    title: 'trait2.title',
    paragraph1: 'trait2.skills',
    paragraph2: 'trait2.audio',
  },
  {
    title: 'trait3.title',
    paragraph1: 'trait3.engineer',
    paragraph2: 'trait3.project',
  },
  {
    title: 'trait4.title',
    paragraph1: 'trait4.dao',
    paragraph2: 'trait4.adept',
  },
  // Add more traits...
];
function Anne() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div>Loading...</div>;  // Or some loading spinner
  }

  return (
    <Box sx={{ textAlign: 'center', margin: 'auto', marginTop: '4rem' }}>
      <BackButton />
      <Typography variant="h2" gutterBottom>{t('anne.tagline')}</Typography>
      <Typography variant="h4" component="h1">{t('anne.description')}</Typography>
      <Grid container spacing={3}>
        {traits.map((trait, index) => (
          <Grid item xs={12} sx={{ width: '100%' }} key={index}>
            <Paper sx={{ padding: 3, margin: 1 }}>
              <Typography variant="h5" gutterBottom>
                {t(`anne.${trait.title}`)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t(`anne.${trait.paragraph1}`)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {t(`anne.${trait.paragraph2}`)}
              </Typography>
            </Paper>
          </Grid>
        ))}
          <Grid item xs={12} sx={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="https://www.youtube.com/channel/UCeYO5sVjNzlFtJqPWA6jTYg" target="blank">DJ MonChi - YouTube</a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Anne;
