import {Container, Typography, Box } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import gear from './brains.png';

const ImageTextComponent = ({ imageUrl, text }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: 4 // adjust the gap between the image and text
    }}
  >
    <Avatar 
      src={imageUrl} 
      alt="image description"
      sx={{ 
        width: 500, // adjust size as needed
        height: 500 // adjust size as needed
      }}
    />
    <Typography variant="body1">{text}</Typography>
  </Box>
);




export default function MainPage() {
  const { t } = useTranslation()

  return (
    <>
      <Container sx={{ paddingTop:"40px",height:'100vh', width:'100vp', backgroundRepeat:'space', alignItems:"center"}}>
        <Typography sx={{fontSize:"80px", fontWeight:"bold", textAlign:'center'}}>{t('main_page.visitor')}</Typography>
        <Typography sx={{fontSize:"20px", textAlign:'center',fontStyle:'italic'}}>{t('main_page.weird')}</Typography><Typography sx={{fontSize:"20px", textAlign:'center'}}>{t('main_page.think')}</Typography>
        <br/>
        <Typography sx={{fontSize:"45px", textAlign:'center'}}>{t('main_page.hydrate')}</Typography>
        <ImageTextComponent imageUrl={gear} text="This is Jim. He's the Autist Artist of our network."/>
      </Container>
      </>
  );
}

/* 
find a way to display an image next to a few lines of words, like
"we believe in skills synergy"
"our skills are varied yet complementary to offer related services than the one you came to us for."
*/
