import './App.css';
import { Container } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom';


function Enter() {
  return (
    <div className="Enter">
      <header className="enter-header">
        <h1 className="h1">Hi, I'm Anne.</h1>
        <img src={tea} className="enter-logo" alt="SomeTea?" />
          <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
            Please, make yourself comfortable, and stay hydrated.
          </p>
      </header>
          <Container>
            <h2 className='h2'>What do you want to know about?</h2>
              <ButtonGroup disableElevation variant="contained">
                <Button variant="outlined" size="large">
                  <Link to="src/Components/MainDev.js">Developper</Link>
                </Button>
                <Button variant="contained" size="large"> 
                  <Link to="src/Components/MainMul.js">Multimedia</Link>
                </Button>
              <br></br> 
                  <Button>
                    <Link to="src/Components/common/Contact.js">
                      <p>Contact</p>
                    </Link>
                  </Button>
            </ButtonGroup>
          </Container>
      </div>
  );
}

export default Enter;
