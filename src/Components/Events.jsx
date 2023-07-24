import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
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
  { textKey: 'MC', imageName: 'mcImage' },
  { textKey: 'DJ', imageName: 'djImage' },
  { textKey: 'Rentals', imageName: 'rentalsImage' },
  { textKey: 'Sound', imageName: 'soundEngImage' },
  { textKey: 'Musicians', imageName: 'musiciansImage' },
  { textKey: 'Photography', imageName: 'photographyImage' },
];

function Events() {
  const { t } = useTranslation();

  return (
    <Box sx={{ textAlign: 'center', margin: 8, fontSize: 30 }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.imageName} // TODO: Replace with the actual image source
                alt={service.textKey}
              />
              <Typography variant="h6">{t(service.textKey)}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Events;
