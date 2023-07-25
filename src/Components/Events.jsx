import { Box, Grid, Card, CardMedia, Typography, ImageListItem } from '@mui/material';
import React from "react";
import { useTranslation } from 'react-i18next';


/*
MC
DJ
Rentals
Sound Engineering
Consulting
Photography

Have some kind of box for each with two lines maximum for each section, and a picture, similar to the main page 
*/


// HAVE TO IMPORT IMAGES - decide which ones first
// e.g., import mcImage from './path-to-your-images/mcImage.jpg';

const services = [
  {
    img:'/music.jpg',
    to:'/music.jpg',
    textKey: 'MC',
  },
  {
    img:'/music7.jpg',
    to:'/music7.jpg',
    textKey: 'DJ',
  },
  {
    img: '/music6.jpg',
    to:'/music6.jpg',
    textKey: 'Rentals',
  },
  {
    img: '/music3.jpg',
    to:'/music3.jpg',
    textKey: 'Sound',
  },
  {
    img: '/music4.jpg',
    to:'/music4.jpg',
    textKey: 'Musicians',
  },
  {
    img: '/photo1.jpg',
    to:'/photo1.jpg',
    textKey: 'Photography',
  },

];

function Events() {
  const { t } = useTranslation();

  return (
    <Box sx={{ textAlign: 'center', margin: 8, fontSize: 30 }}>
      <Typography sx={{marginBottom:"1.5rem", fontSize:"2rem"}}>
      {t('events.Intro')}
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a href={service.to}>
            <ImageListItem key={service.img}>
              <img
                src={`${service.img}?w=161&fit=crop&auto=format`}
                srcSet={`${service.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={service.textKey}
                loading="lazy"
              />
            </ImageListItem>
            </a>
            <Card>
              <Typography variant="h6">{t(service.textKey)}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


export default Events;
