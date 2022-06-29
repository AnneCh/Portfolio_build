import React from "react";
import { useTranslation } from 'react-i18next'
import { Container, ButtonGroup, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import tree from "../imgs/TreeHead.png";
import { Image } from "@mui/icons-material";




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
  const { t } = useTranslation()
  return (
        <Container className="flex justify-center">
          <ButtonGroup>
          <Link to="/MainDev">
              <Button>{t('navbar.dev')}</Button>
            </Link>
            <Link to="/MainMul">
              <Button>{t('navbar.mbm')}</Button>
            </Link>
            <Link to="/Studies">
              <Button>{t('navbar.studies')}</Button>
            </Link>
            <Link to="/WhatElse">
              <Button>{t('navbar.else')}</Button>
            </Link>
            <Link to="/Contact">
              <Button>{t('navbar.contact')}</Button>
            </Link>
          </ButtonGroup>
        </Container>
  )
}

