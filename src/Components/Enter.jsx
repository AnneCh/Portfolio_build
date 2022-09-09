import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export default function MainPage() {
  const { t } = useTranslation()

//  <img src={tea} alt="SomeTea?" /> find out how to put it as a background
  const number_visits = "1"
  // find how to keep track and return the visits of this page => google analytics extension

  return (
    <>
      <Container sx={{alignItems:"center"}}>
        <h1>{t('main_page.visitor', {number_visits})}</h1>
        <h2>{t('main_page.honor')}</h2>
        <p>{t('main_page.hydrate')}</p>
        <h2>{t('main_page.know')}</h2>
      </Container>
      </>
  );
}

/* create a function or event emitted that, when the visitor clicks on one of the links,
the Enter page disappears


/* create class to welcome the visitor by their number of visitors on my portfolio so far

class visitors extends React.Component {
  1. find how to keep track of visits
  2. then how to display the number of the visitor who's just loaded my page
  render() { 
  }
}



      <Box sx={{alignItems:"center"}}>
        <Link to="/MainDev">
          <Button size="large">Web3 Programmer</Button>
        </Link>
        <Link to="/MainMul">
          <Button size="large">Entrepreneur</Button>
        </Link>
        <Link to="/Studies">
          <Button size="large">Studies</Button>
        </Link>
        <Link to="/WhatElse">
          <Button size="large">Other interests</Button>
        </Link>
      </Box>

**/
