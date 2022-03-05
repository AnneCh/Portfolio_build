import tea from './tea.png';
import MainDev from './Components/MainDev.js';
import MainMul from './Components/MainMul.js';
import './App.css';
import { Container, Fab, Link } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="h1">Hi, I'm Anne.</h1>
          <img src={tea} className="App-logo" alt="SomeTea?" />
          <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
            Please, make yourself comfortable, and stay hydrated.
          </p>
          <Container>
            <h2 className='h2'>What do you want to know about?</h2>
            <ButtonGroup disableElevation variant="contained">
              <Button variant="outlined" size="large">
                <Switch>
                  <Route exact path="src/Components/MainDev.js">
                    <MainDev /> 
                  </Route>
                </Switch>
              </Button>
              <Button variant="outlined" size="large"> 
                <Switch>
                  <Route exact path="src/Components/MainMul.js">
                    <MainMul />
                  </Route>
                </Switch>
              </Button>
            </ButtonGroup>
            <br></br> 

            <Button>
            <Link to="src/Components/common/Contact.js">
              +
            </Link>
            </Button>
          </Container>
          </header>
      </div>
    </Router>
  );
}

export default App;




