import React from "react";
import { Container, ButtonGroup, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import tree from "../imgs/TreeHead.png";
import { Image } from "@mui/icons-material";

export function btnHome() {
  return(
      <Link to="/">
        <Button>Home</Button>
        <Image src={tree} alt="Home Page" />
      </Link>
  )
}



export function internalNavDev() {
  return (
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
  )
}

export function NavBar() {
  return (
        <Container className="flex justify-center">
          <ButtonGroup>
          <Link to="/MainDev">
              <Button>Programmer</Button>
            </Link>
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
  )
}

