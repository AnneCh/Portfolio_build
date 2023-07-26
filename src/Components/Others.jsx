import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const services = [
  {
    title: 'others.Consulting',
    description: 'others.consulting',
   },
  {
    title: 'others.Photo',
    description: 'others.photo',
    },
  {
    title: 'others.Websites',
    description: 'others.website',
  },
  {
    title: 'others.Autism',
    description: 'others.autism',
  },
  {
    title: 'others.MMA',
    description: 'others.mma',
     },
  // Add more services...
];

function Others() {
  const { t } = useTranslation();

  return (
    <Box sx={{ textAlign: 'center', margin: 'auto', marginTop: '4rem' }} maxWidth={false}>
      <Grid container spacing={3} sx={{width:'100%'}}>
        {services.map((service, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Paper elevation={index % 2 === 0 ? 1 : 12} sx={{ padding: 3 }}>
              <Typography variant="h5" gutterBottom>
                {t(service.title)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t(service.description)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Others;
