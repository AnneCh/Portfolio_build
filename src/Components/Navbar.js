import React from "react";
import { Container, ButtonGroup, Button } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import WhatElse from "./WhatElse";
import Contact from "./Contact";
import Projects from "./Projects";
import MainDev from "./MainDev";
import MainMul from "./MainMul";
import Tools from "./Tools";


export function NavbarMBM() {
  return (
    <Router>
        <Container className="flex justify-center">
          <ButtonGroup>
            <Link to="/MainDev">
              <Button>Programmer</Button>
            </Link>
            <Link to="/WhatElse">
              <Button>Other things I do</Button>
            </Link>
            <Link to="/Contact">
              <Button>Contact</Button>
            </Link>
          </ButtonGroup>
        </Container>
        <Switch>
            <Route path="/MainDev">
              <MainDev />
            </Route>
            <Route path="/WhatElse">
              <WhatElse />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
        </Switch>
    </Router>
  )
}

export function internalNavbarDev() {
  return (
    <Router>
      <Container className="flex justify-center">
        <ButtonGroup>
          <Link to="/Projects">
            <Button>Projects</Button>
          </Link>
          <Link to="/Tools">
            <Button>Tools</Button>
          </Link>
          <Link>
            <Button>GitHub</Button>
          </Link>
          <Link>
            <Button>GitHub</Button>
          </Link>
        </ButtonGroup>
      </Container>
      <Switch>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Tools">
          <Tools />
        </Route>
      </Switch>
    </Router>
  )
}

export function NavbarDev() {
  return (
    <Router>
        <Container className="flex justify-center">
          <ButtonGroup>
            <Link to="/MainMul">
              <Button>Multimedia</Button>
            </Link>
            <Link to="/WhatElse">
              <Button>Other things I do</Button>
            </Link>
            <Link to="/Contact">
              <Button>Contact</Button>
            </Link>
          </ButtonGroup>
        </Container>
        <Switch>
            <Route path="/MainMul">
              <MainMul />
            </Route>
            <Route path="/WhatElse">
              <WhatElse />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
        </Switch>
    </Router>
  )
}

