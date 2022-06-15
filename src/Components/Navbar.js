import React from "react";
import { Container, ButtonGroup, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import WhatElse from "./WhatElse";
import Contact from "./Contact";
import Projects from "./Projects";
import MainDev from "./MainDev";
import MainMul from "./MainMul";
import Tools from "./Tools";
import Enter from "../Enter";

export function Home() {
  return(
    <Router>
      <Link to="/">
        // water bottle or drink icon
      </Link>
      <Routes>
        <Route path="/" element={<Enter />}/>
      </Routes>
    </Router>
  )
}

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
        <Routes>
          <Route path="/MainDev" element={<MainDev />}/>
          <Route path="/WhatElse" element={<WhatElse />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </Router>
  )
}

export function internalNavDev() {
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
          <Link to={{pathname: 'https://github.com/AnneCh?tab=repositories'}} target="_blank">
            <Button>GitHub</Button>
          </Link>
          <Link>
            <Button>GitHub</Button>
          </Link>
        </ButtonGroup>
      </Container>
      <Routes>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Tools" element={<Tools />}/>

      </Routes>
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
        <Routes>
          <Route path="/MainMul" element={<MainMul />}/>
          <Route path="/WhatElse" element={<WhatElse />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </Router>
  )
}

