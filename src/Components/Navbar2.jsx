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
  IconButton, 
  createTheme,
  CssBaseline,
  ThemeProvider,
  ToggleButton
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import { HomeButton } from "./Buttons";
import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';
import MenuBurger from "./MenuBurger";
import banner from './zhite.png'


export function NavBar2() {
  //translation
  const { t } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  //dark or light mode
  const [mode, setMode] = useState("dark");
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
  () => createTheme(mode === "dark" ? darkTheme : lightTheme),
  [mode]
  )

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
      <Box sx={{flexGrow:1, marginBotton: 2}}>
        <AppBar position="sticky" display="flex" alignItems="center">
          <Toolbar disableRipple sx={{maxWidth:'100%'}}>
          <MenuBurger/>
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
              keepMounted transformOrigin={{vertical:"top", horizontal:"left"}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display:{xs:'block', md:'none'}, padding:"20px", alignItems:"center"}}
              >
              <HomeButton/>
              <MenuBurger/>
              {/* <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
              <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton> */}

                  <NightToggle onChange={toggleMode}/>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
              <HomeButton />
              {/* <ToggleButton className="toggle" onClick={() => changeLanguage('en')}>en</ToggleButton>
              <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton> */}
              <img src={banner} style={{ height: '200px', margin: '0 auto'}}/>

              <Box paddingTop={5} paddingRight={3}>
                <NightToggle onChange={toggleMode}/>
              </Box>
            </Box> 
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
