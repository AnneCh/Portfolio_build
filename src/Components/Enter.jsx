import {Container, Typography, Box } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import jim from './jim.png';
import kevin from './kevin.png';
import anne from './anne.png';
import { Link } from 'react-router-dom'

const ImageTextComponent = ({ imageUrl, text }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: 10 // adjust the gap between the image and text
    }}
  >
    <Avatar 
      src={imageUrl} 
      alt="image description"
      sx={{ 
        width: 350, // adjust size as needed
        height: 350 // adjust size as needed
      }}
    />
    <Typography variant="body1" fontSize={'150%'}>{text}</Typography>
  </Box>
);

const ImageTextRevert = ({ imageUrl, text }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: 10 // adjust the gap between the image and text
    }}
  >
    <Typography variant="body1" fontSize={'150%'}>{text}</Typography>
    <Avatar 
      src={imageUrl} 
      alt="image description"
      sx={{ 
        width: 350, // adjust size as needed
        height: 350 // adjust size as needed
      }}
    />
  </Box>
);


export default function MainPage() {
  const { t } = useTranslation()

  return (
    <>
      <Container sx={{ paddingTop:"40px"}}>
        <Typography sx={{fontSize:"80px", fontWeight:"bold", textAlign:'center'}}>{t('main_page.visitor')}</Typography>
        <br/>
        <Typography sx={{fontSize:"45px", textAlign:'center'}}>{t('main_page.hydrate')}</Typography>
        <Typography sx={{fontSize:"20px", textAlign:'center'}}>{t('main_page.weird')}</Typography><Typography sx={{fontSize:"20px", fontStyle:'italic', textAlign:'center'}}>{t('main_page.think')}</Typography>
        <Link to='/Jim' style={{ textDecoration: 'none' }}><ImageTextComponent imageUrl={jim} text={t('main_page.jim')}/></Link>
        <a href='https://kevinbahler.notion.site/CV-aed239f939e34d25bb628b7b14cee2e7' target="_blank" style={{ textDecoration: 'none' }}>  <ImageTextRevert imageUrl={kevin} text={t('main_page.kevin')}/></a>
        <Link to='/Anne' style={{ textDecoration: 'none' }}><ImageTextComponent imageUrl={anne} text={t('main_page.anne')}/></Link>
      </Container>
      <Container>

      </Container>
      </>
  );
}

/* 
find a way to display an image next to a few lines of words, like
"we believe in skills synergy"
"our skills are varied yet complementary to offer related services than the one you came to us for."
*/
