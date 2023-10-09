import i18n from "../i18n";
import React from "react";
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  AppBar, 
  Toolbar,
  Box, 
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import { HomeButton } from "./Buttons";
import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';
import MenuBurger from "./MenuBurger";
import banner from './zhite.png'
import { Link } from "react-router-dom";


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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
        <AppBar position="sticky">
          <Toolbar disableRipple sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuBurger 
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted 
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ padding: "20px", alignItems: "center" }}
              />
              <HomeButton />
              <Box sx={{ pl: 2 }}>
                <NightToggle onChange={toggleMode} />
              </Box>
            </Box>
            {/* <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
            <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton> */}
            
            {/* Spacer to push image to center */}
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Link to="/#"><img src={banner} alt="Banner" style={{ height: '200px' }} /></Link>
            </Box>
            {/* Another Spacer to balance out the left-side width */}
            <Box sx={{ flexGrow: 1 }} />
  
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}


