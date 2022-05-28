import './App.css';
import { Container } from '@mui/material';
import tea from './tea.png'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MainMul from './Components/MainMul'

function Enter() {
  return (
    <Container className='main'>
        <header className="enter">
          <h1 className="h1">Hi, I'm Anne.</h1>
          <img src={tea} className="enter-logo" alt="SomeTea?" />
            <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
              Please, make yourself comfortable, and stay hydrated.
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
