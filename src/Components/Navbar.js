import React from "react";
import { Container } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import WhatElse from "./WhatElse";
import Contact from "./Contact";
import Projects from "./Dev/Projects";


export default function Navbar() {
  return (
    <Router>
        <Container className="flex justify-center">
            <Link to="/Projects">Projects</Link>
            <Link to="/WhatElse">Other things I do</Link>
            <Link to="/Contact">Contact</Link>
        </Container>
        <Switch>
            <Route path="Projects">
              <Projects />
            </Route>
            <Route path="WhatElse">
              <WhatElse />
            </Route>
            <Route path="Contact">
              <Contact />
            </Route>
        </Switch>
    </Router>
  )
}