import { DarkDefaultTheme } from './theme';
import { Container, ThemeProvider } from '@mui/material';
import tea from './tea.png'
import * as React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material/';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MainDev from './Components/MainDev';
import MainMul from './Components/MainMul';
import Contact from './Components/Contact';
import WhatElse from './Components/WhatElse';
import WhyBlockchain from './Components/WhyBlockchain';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

theme = responsiveFontSizes(theme);

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


function Home() {
  return (
    <BrowserRouter>
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
              <Box>
                <ButtonGroup variant="text" aria-label="text button group">
                  <Link to="/MainDev">
                    <Button>Programmer</Button>
                  </Link>
                  <Link to="/MainMul">
                    <Button>Project Management</Button>
                  </Link>
                  <Link to="/WhatElse">
                    <Button>Core Principles</Button>
                  </Link>
                  <Link to="/Contact">
                    <Button>Contact</Button>
                  </Link>
                </ButtonGroup>
              </Box>
          </Container>
        </ThemeProvider>
      <Routes>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/WhatElse" element={<WhatElse />}/>
        <Route path="/MainDev" element={<MainDev />}/>
        <Route path="/MainMul" element={<MainMul />}/>
      </Routes>
    </BrowserRouter>
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


export default Home
