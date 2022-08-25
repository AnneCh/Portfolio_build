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
  } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import { HomeButton } from "./Buttons";


import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';



export function NavBar() {
  //translation
  const { t } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  //pages to be displayed
  // my issue comes when rendering the page in French, how do I map through the array of pages 
  //while rendering the correct link/translation
  const pages=[
    (t('navbar.dev')),
    (t('navbar.mbm')),
    (t('navbar.studies')),
    (t('navbar.else')),
    (t('navbar.contact')),
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

  // open or close the swipeable drawer
  const [open, setOpen] = useState(false)

  return(

    <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
      <Box sx={{flexGrow:1, marginBotton: 3}}>
        <AppBar position="sticky">
          <Toolbar>
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
                  <HomeButton/>
                  <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                  <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                  {pages.map((name, path) => (
                    <MenuItem key={name} to={path} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{name}</Typography>
                    </MenuItem>
                  ))}
                  <NightToggle onChange={toggleMode} align="center"/>

                </Menu>
              </Box>
               <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
                <HomeButton/>
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                {pages.map((name, path) => (
                  <Button key={name} to={path} onClick={handleCloseNavMenu} sx={{color:'white', display:'block'}}>
                    {name}
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

