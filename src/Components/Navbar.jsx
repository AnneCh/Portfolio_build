import React from "react";
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom';
import { AppBar, Grid, Tabs, Toolbar, Tab } from '@mui/material';
import { HomeButton } from "./Buttons";
import { useState, useMemo } from 'react';
import i18n from "../i18n";

import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    ToggleButton,
    Container,
    ToggleButtonGroup,
    Button
  } from "@mui/material"

import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';

export function NavBar() {    
  const { t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    // if the theme is not light, then set it to dark
    if (mode === 'light') {
        setMode('dark');
    // otherwise, it should be light
    } else {
        setMode('light');
    }
  }
  
  const theme = useMemo(
  () => createTheme(mode === "light" ? lightTheme : darkTheme),
  [mode]
  )

  const [value, setValue] = useState();

  return(

    <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
      <AppBar position='static' width='100%'>
          <Toolbar position="relative" disableGutters>
              <Grid container >
                  <Grid item xs={1}>
                      <HomeButton/>
                  </Grid>

                  <Grid item xs={1}>
                    <NightToggle onChange={toggleMode} align="center"/>
                  </Grid>

                  <Grid item xs={5}>
                    <Tabs textColor="inherit" value={value} onChange={(e,val)=> setValue(val)}>
                      <Tab label={t('navbar.dev')} component={Link} to="/MainDev" />
                      <Tab label={t('navbar.mbm')} component={Link} to="/MainMul" />
                      <Tab label={t('navbar.studies')} component={Link} to="/Studies" />
                      <Tab label={t('navbar.else')} component={Link} to="/WhatElse" />
                      <Tab label={t('navbar.contact')} component={Link} to="/Contact" />
                    </Tabs>    
                  <Grid item xs={2}/>
                  <Grid item xs={2}>
                    <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                    <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                  </Grid>
                </Grid>    
              </Grid>                        
          </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}




// export function internalNavDev() {
//   return (
//       <Container className="flex justify-center">
//         <ButtonGroup>
//           <Link to="/Projects">
//             <Button>Projects</Button>
//           </Link>
//           <Link to="/Tools">
//             <Button>Tools</Button>
//           </Link>
//           <Link to={{pathname: 'https://github.com/AnneCh?tab=repositories'}} target="_blank">
//             <Button>GitHub</Button>
//           </Link>
//           <Link>
//             <Button>GitHub</Button>
//           </Link>
//         </ButtonGroup>
//       </Container>
//   )
//}
