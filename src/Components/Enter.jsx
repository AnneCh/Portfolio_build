import { Button, Container, Typography, Box } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import tea from "./teaTrans.png";


export default function MainPage() {
  const { t } = useTranslation()

//  <img src={tea} alt="SomeTea?" /> find out how to put it as a background
  const number_visits = "1"
  // find how to keep track and return the visits of this page => google analytics extension

  return (
    <>
      <Container sx={{ paddingTop:"40px", backgroundImage:`url(${tea})`,height:'100vh', width:'100vp', backgroundRepeat:'space', alignItems:"center"}}>
        <Typography sx={{fontSize:"100px", fontWeight:"bold", textAlign:'center'}}>{t('main_page.visitor', {number_visits})}</Typography>
        <Typography sx={{fontSize:"17px", textAlign:'center'}}>{t('main_page.honor')}</Typography>
        <br/>
        <Typography sx={{fontSize:"55px", textAlign:'center'}}>{t('main_page.hydrate')}</Typography>
        <Typography sx={{paddingTop:"20px", fontSize:"18px", fontWeight:"bold", textAlign:'center'}}>{t('main_page.know')}</Typography>
        <Box>
          <Link to="/MainMul">
              <Button key="Entrepreneur"/>
          </Link>
          <Link to="/MainDev">
            <Button key='Developer' />
          </Link>
        </Box>
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

**/
