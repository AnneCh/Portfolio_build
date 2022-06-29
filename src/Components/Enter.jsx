import { Container } from '@mui/material';
import tea from '../tea.png'
import * as React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material/';
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


/**The Enter page is the main page that will be displayed to the visitor's first contact with my portfolio
It must give the visitor a greeting message (would be cool to greet the visitor with a personnalised message 
that tells them that they are visitor number X)

The Enter page must include a translation button to let the user chose between French and English
I'll see what are the fastest and most professional ways to include a translation tool 

This page needs to give 4 choices to the visitor:
- Explore my IT resume
- Explore my Project Management resume
- Other thing I care about
- Contact

Background : remplacer le background par le titre "Hi, I'm Anne"
*/

export default function MainPage() {
  const { t } = useTranslation()

//  <img src={tea} alt="SomeTea?" /> find out how to put it as a background
  const number_visits = "1"
  // find how to keep track and return the visits of this page => google analytics extension

  return (
          <Container>
            <header className="enter">
              <h1>{t('main_page.visitor', {number_visits})}</h1> // CHANGE VALUE, CALCULATE IT
              <h2>{t('main_page.honor')}</h2>
              <p>{t('main_page.hydrate')}</p>
            </header>
              <h2>{t('main_page.know')}</h2>
              <Box>
                <ButtonGroup variant="text" aria-label="text button group">
                  <Link to="/MainDev">
                    <Button>{t("main_page.dev")}</Button>
                  </Link>
                  <Link to="/MainMul">
                    <Button>{t("main_page.mbm")}</Button>
                  </Link>
                  <Link to="/Studies">
                    <Button>{t("main_page.studies")}</Button>
                  </Link>
                  <Link to="/WhatElse">
                    <Button>{t("main_page.else")}</Button>
                  </Link>
                  <Link to="/Contact">
                    <Button>{t("main_page.contact")}</Button>
                  </Link>
                </ButtonGroup>
              </Box>
          </Container>
  );
}

/* create a function or event emitted that, when the visitor clicks on one of the links,
the Enter page disappears


/* create class to welcome the visitor by their number of visitors on my portfolio so far

class welcome extends React.Component{
  render() {
    return <h1>Hello, guest #{this.props.visitor}, welcome.</h1>
  }
}

class visitors extends React.Component {
  1. find how to keep track of visits
  2. then how to display the number of the visitor who's just loaded my page
  render() { 
  }
}

**/
