import { Container } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';


export default function MainPage() {
  const { t } = useTranslation()

//  <img src={tea} alt="SomeTea?" /> find out how to put it as a background
  const number_visits = "1"
  // find how to keep track and return the visits of this page => google analytics extension

  return (
          <Container>
            <header>
              <h1>{t('main_page.visitor', {number_visits})}</h1> // CHANGE VALUE, CALCULATE IT
              <h2>{t('main_page.honor')}</h2>
              <p>{t('main_page.hydrate')}</p>
            </header>
              <h2>{t('main_page.know')}</h2>
          </Container>
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
