import './App.css';
import { Container } from '@mui/material';
import tea from './tea.png'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import {Link} from 'react-router-dom';
import {ThemeProvider} from '@mui/material'
import theme from './theme';


function Enter() {
  return (
    <ThemeProvider theme={theme}>
    <div className="Enter">
      <header className="enter">
        <h1 className="h1">Hi, I'm Anne.</h1>
        <img src={tea} className="enter-logo" alt="SomeTea?" />
          <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
            Please, make yourself comfortable, and stay hydrated.
          </p>
      </header>
          <Container>
            <h2 className='h2'>What do you want to know about?</h2>
              <ButtonGroup disableElevation variant="contained">
              <Button variant="contained" color="primary" size="large">
                <a
                  className="App-link"
                  href="./Components/MainDev.js"
                  rel="noopener noreferrer"
                >
                  Developper
                </a>
              </Button>
              <Button variant="contained" color="secondary" size="large">
                <a
                  className="App-link"
                  href="./Components/MainMul.js"
                  rel="noopener noreferrer"
                >
                  Multimedia
                </a>
              </Button>
              <br></br> 
              <Button variant="contained" color="secondary" size="large">
                <a
                  className="App-link"
                  href="./Components/MainMul.js"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </Button>
            </ButtonGroup>
          </Container>
      </div>
      </ThemeProvider>
  );
}

export default Enter;
