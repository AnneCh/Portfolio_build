

import {Container, Typography, Box } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import jim from './jim.png';
import kevin from './kevin.png';
import anne from './anne.png';
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SocialMediaIcons = ({ linkedin, twitter, youtube }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2
    }}
  >
    <IconButton href={linkedin} target="_blank" aria-label="LinkedIn">
      <LinkedInIcon />
    </IconButton>
    <IconButton href={twitter} target="_blank" aria-label="Twitter">
      <TwitterIcon />
    </IconButton>
    <IconButton href={youtube} target="_blank" aria-label="YouTube">
      <YouTubeIcon />
    </IconButton>
  </Box>
);



const ImageTextComponent = ({ imageUrl, text, linkedin, twitter, youtube }) => (
<Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}
  >
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 10
      }}
    >
      <Avatar 
        src={imageUrl} 
        alt="image description"
        sx={{ 
          width: 350,
          height: 350
        }}
      />
      <Typography variant="body1" fontSize={'150%'}>{text}</Typography>
    </Box>
    <SocialMediaIcons linkedin={linkedin} twitter={twitter} youtube={youtube} />
  </Box>
);


const ImageTextRevert = ({ imageUrl, text, linkedin, twitter, youtube }) => (
<Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}
  >
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 10
      }}
    >
      <Typography variant="body1" fontSize={'150%'}>{text}</Typography>
      <Avatar 
        src={imageUrl} 
        alt="image description"
        sx={{ 
          width: 350,
          height: 350
        }}
      />
    </Box>
    <SocialMediaIcons linkedin={linkedin} twitter={twitter} youtube={youtube} />
  </Box>
);


export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <Container sx={{ paddingTop:"40px"}}>
        <Typography sx={{fontSize:"80px", fontWeight:"bold", textAlign:'center'}}>{t('main_page.visitor')}</Typography>
        <br/>
        <Typography sx={{fontSize:"45px", textAlign:'center'}}>{t('main_page.hydrate')}</Typography>
        <Typography sx={{fontSize:"20px", textAlign:'center'}}>{t('main_page.weird')}</Typography>
        <Typography sx={{fontSize:"20px", fontStyle:'italic', textAlign:'center'}}>{t('main_page.think')}</Typography>
        <Link to='/Jim' style={{ textDecoration: 'none' }}><ImageTextComponent imageUrl={jim} text={t('main_page.jim')} linkedin="" youtube="" twitter=""/></Link>
        <a href='https://kevinbahler.notion.site/CV-aed239f939e34d25bb628b7b14cee2e7' target="_blank" style={{ textDecoration: 'none' }} linkedin="" youtube="" twitter="">  <ImageTextRevert imageUrl={kevin} text={t('main_page.kevin')}/></a>
        <Link to='/Anne' style={{ textDecoration: 'none' }}><ImageTextComponent imageUrl={anne} text={t('main_page.anne')} linkedin="" youtube="" twitter="https://twitter.com/AnneMonChi"/></Link>
      </Container>
      <Container>

      </Container>
      </>
  );
}


