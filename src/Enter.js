import './App.css';
import { LightTheme, DarkDefaultTheme } from './theme';
import { Container, ThemeProvider } from '@mui/material';
import tea from './tea.png'
import * as React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material/';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import MainDev from './Components/MainDev';
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

Background : remplacer le background par le titre "Hi, I'm Anne"
*/


function Enter() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={DarkDefaultTheme}>
          <Container>
            <header className="enter">
              <h1>Hi, I'm Anne.</h1>
              <img src={tea} alt="SomeTea?" />
                <p>I'm honored you're willing to know more about me.<br></br>
                  Please, make yourself comfortable and stay hydrated.
                </p>
            </header>
              <h2>What do you want to know about?</h2>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup variant="text" aria-label="text button group">
                  <Link to="/MainDev.js">
                    <Button>Programmer</Button>
                  </Link>
                  <Link>
                    <Button>Project Management</Button>
                  </Link>
                  <Link>
                    <Button>Core Principles</Button>
                  </Link>
                  <Link>
                    <Button>Contact</Button>
                  </Link>
                </ButtonGroup>
            </Box>
          </Container>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Enter;
