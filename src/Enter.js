import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import tea from './tea.png'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MainMul from './Components/MainMul'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


/**The Enter page is the main page that will be displayed to the visitor's first contact with my portfolio
It must give the visitor a greeting message (would be cool to greet the visitor with a personnalised message 
that tells them that they are visitor number X)

The Enter page must include a translation button to let the user chose between French and English
I'll see what are the fastest and most professional ways to include a translation tool 

This page needs to give 4 choices to the visitor:
- Explore my IT resume
- Explore my Project Management resume
- Core Principles
- Contact
*/

function Enter() {
  return (
    <Container className='main' >
        <header className="enter">
          <h1 className="h1">Hi, I'm Anne.</h1>
          <img src={tea} className="enter-logo" alt="SomeTea?" />
            <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
              Please, make yourself comfortable and stay hydrated.
            </p>
        </header>
          <h2 className='h2'>What do you want to know about?</h2>
            <ButtonGroup disableElevation variant="contained">
            <Button variant="contained" color="primary" size="large">
              <a className="App-link"
                  href="./Components/MainDev.js">
                  Developper </a>
            </Button>
            <Button variant="contained" color="secondary" size="large">
              <a className="App-link"
                href={MainMul}>
                  Multimedia
              </a>
            </Button>
            <br></br> 
            <Button variant="contained" color="secondary" size="large">
              <a className="App-link"
                href="./Components/Contact.js">
                  Contact
              </a>
            </Button>
          </ButtonGroup>
      </Container>
  );
}

export default Enter;
