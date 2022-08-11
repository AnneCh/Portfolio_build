import React from "react";
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom';
import { AppBar, Grid, Tabs, Toolbar, Tab, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { HomeButton } from "./Buttons";
import { useState, useMemo } from 'react';
import i18n from "../i18n";

import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    ToggleButton,
  } from "@mui/material"
  import MenuIcon from "@mui/icons-material/Menu"

import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';


const pages=["Developer", "Entrepreneur", "Education", "Stuff", "Contact"]


export function NavBar() {    
  //translation
  const { t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  //dark or light mode
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

  //to change the navbar list into a burger icon
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }


  return(

    <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
      <Box sx={{flexGrow:1, marginBotton: 3}}>
        <AppBar position='static'>
            <Toolbar disableGutters>
              <Box sx={{flexGrow: 1, display: {xs:"flex", md:"none"}}}>
                <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                  <MenuIcon/>
                </IconButton>
                <Menu id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical:"bottom",
                  horizontal:"left"
                }}
                keepMounted transformOrigin={{vertical:"top", horizontal:"left",}}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display:{xs:'block', md:'none'},}}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>



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
                    <Grid item xs={2}>
                      <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                      <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                    </Grid>
                  </Grid>    
                </Grid>                        
            </Toolbar>
        </AppBar>
        </Box>
    </ThemeProvider>
  )
}

