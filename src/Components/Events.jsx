import { Box, Grid, Card, Typography, ImageListItem } from '@mui/material';
import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackButton from "./BackButton";
import styled from 'styled-components';



// HAVE TO IMPORT IMAGES - decide which ones first
// e.g., import mcImage from './path-to-your-images/mcImage.jpg';

const services = [
  {
    img:'/music.jpg',
    to:'/music.jpg',
    textKey: 'events.MC',
    extraText: 'events.mc'
  },
  {
    img:'/music7.jpg',
    to:'/music7.jpg',
    textKey: 'events.DJ',
    extraText: 'events.dj'
  },
  {
    img: '/music6.jpg',
    to:'/music6.jpg',
    textKey: 'events.Rentals',
    extraText: 'events.rentals'
  },
  {
    img: '/music9.jpg',
    to:'/music9.jpg',
    textKey: 'Sound',
    extraText: 'events.sound'
  },
  {
    img: '/music4.jpg',
    to:'/music4.jpg',
    textKey: 'events.Musicians',
    extraText: 'events.musicians'
  },
  {
    img: '/music3.jpg',
    to:'/music3.jpg',
    textKey: 'events.Photography',
    extraText: 'events.photo'
  },

];
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

function Events() {
  const { t } = useTranslation();

  return (
    <Box sx={{ textAlign: 'center', margin: 8, fontSize: 30 }}>
      <BackButton/>
      <Typography sx={{marginBottom:"1.5rem", fontSize:"2rem"}}>
      {t('events.Intro')}
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <div key={index}>
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a href={service.to}>
              <Box sx={{ width: 600, height: 400, backgroundColor: 'lightgrey'}}>
                <ImageListItem key={service.img} style={{ position: 'relative' }}>
                  <img
                      src={`${service.img}`}
                      srcSet={`${service.img}`}
                      alt={service.textKey}
                      loading="lazy"
                      style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                      }}
                  />
                  <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Change 0.3 to adjust the darkness
                      pointerEvents: 'none'  // Ensure that the overlay doesn't interfere with any potential interactions with the image
                  }}></div>
                </ImageListItem>
              </Box>
            </a>
            <StyledLink to="/contact" underline="none">
              <Card sx={{width: 600, backgroundColor: 'lightgrey'}}>
              <Typography variant="h4">{t(service.textKey)}</Typography>
              <Typography variant="h6">
                {t(service.extraText)}
                {index === 5 && <a href="https://www.youtube.com/@ThePolymathExperience" target="_blank" rel="noopener noreferrer">🎵</a>}
              </Typography>
              </Card>
            </StyledLink>
          </Grid>
        </div>
        ))}
      </Grid>
      <Box sx={{marginTop:"1.5rem"}}>
        <Link to="/contact">{t('events.touch')}</Link>{t('events.quote')}
      </Box>
    </Box>
  );
}


export default Events;
