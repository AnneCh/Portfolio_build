import { Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BackButton from "./BackButton";


const services = [
  {
    title: 'others.Consulting',
    description: 'others.consulting',
    image:'/music10.jpg',
  },
  {
    title: 'others.Photo',
    description: 'others.photo',
    image:'/music12.jpg',
  },
  {
    title: 'others.Websites',
    description: 'others.websites',
    image:'/music23.jpg',
  },
  {
    title: 'others.Autism',
    description: 'others.autism',
    image:'/music16.jpg',
  },
  {
    title: 'others.MMA',
    description: 'others.mma',
    image:'/music8.jpg',
  },
];

function Others() {
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: 'center', margin: 'auto', marginTop: '4rem' }}>
      <BackButton/>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sx={{ width: '100%' }} key={index}>
            <Box 
              sx={{ 
                padding: 3,
                position: 'relative', // Relative positioning
                overflow: 'hidden', // So that the pseudo-element doesn't overflow
                '&::after': {
                  content: '""', // necessary for the pseudo-element
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  opacity: 0.20, // 20% opacity for the image
                  zIndex: -1, // Placed behind the content
                }
              }}
            >
              <Typography variant="h5" gutterBottom>
                {t(service.title)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t(service.description)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button sx={{marginTop:"1.2rem"}}variant="contained" color="primary" href="/contact">
        {t('others.contact')}
      </Button>
    </Box>
  );
}

export default Others;
