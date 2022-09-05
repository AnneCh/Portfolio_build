import i18n from "../i18n";
import React from "react";
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import { 
  AppBar, 
  Toolbar,
  Box, 
  Menu,
  Button,
  MenuItem,
  IconButton, 
  createTheme,
  CssBaseline,
  ThemeProvider,
  ToggleButton,
  Typography,
  Tabs,
  Tab,
  ListItem} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import { HomeButton } from "./Buttons";


import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';



export function NavBar2() {
  //translation
  const { t } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const pages3 = [
    <>
      <Tab label={t('navbar.dev')} component={Link} to="/MainDev" />
      <Tab label={t('navbar.mbm')} component={Link} to="/MainMul" />
      <Tab label={t('navbar.studies')} component={Link} to="/Studies" />
      <Tab label={t('navbar.else')} component={Link} to="/WhatElse" />
      <Tab label={t('navbar.contact')} component={Link} to="/Contact" />
    </>
  ]


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
        <AppBar position="sticky">
          <Toolbar>
          <Box sx={{flexGrow: 2, display: {xs:"flex", md:"none"}}}>
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
                  <HomeButton/>
                  <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                  <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                  {pages3.map((label, to) => (
                    <MenuItem key={label} to={to} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{label}</Typography>
                    </MenuItem>
                  ))}
                  <NightToggle onChange={toggleMode} align="center"/>

                </Menu>
              </Box>
               <Box sx={{ flexGrow: 2, display: {xs: 'none', md:'flex'}}}>
                <HomeButton/>
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                {pages3.map((label, to) => (
                  <Button key={label} to={to} onClick={handleCloseNavMenu} sx={{color:'white', display:'block'}}>
                    {label}
                  </Button>
                ))}
                <NightToggle onChange={toggleMode} align="center"/>
              </Box> 
            </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
