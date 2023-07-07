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
  ToggleButton,
  Tab
} from '@mui/material';
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

  const pages = [
    <>
      <Tab sx={{width:"50vp"}} label={t('navbar.mbm')} component={Link} to="/MainMul" />
      <Tab sx={{width:"50vp"}} label={t('navbar.contact')} component={Link} to="/Contact" />
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
        <AppBar position="sticky">
          <Toolbar disableRipple sx={{maxWidth:'100%'}}>
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
              <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
              <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                {pages.map((label, to) => (
                  <Button key={label} to={to} onClick={handleCloseNavMenu} sx={{color:'secondary'}}>
                        <div display="flex" alignItems="flex-col">{label}</div>
                  </Button>
                  ))}
                  <NightToggle onChange={toggleMode}/>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
              <HomeButton />
              <ToggleButton className="toggle" onClick={() => changeLanguage('en')}>en</ToggleButton>
              <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                {pages.map((label, to) => (
                  <Button sx={{color:'secondary'}} key={label} to={to} onClick={handleCloseNavMenu}>
                    {label}
                  </Button>
                ))}
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
