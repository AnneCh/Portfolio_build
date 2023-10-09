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
  Tabs,
  Tab
} from '@mui/material';
import { MaterialUISwitch as NightToggle} from "./Styles/Switch.jsx";
import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';
import banner from './zhite.png';
import { Link, useLocation } from "react-router-dom";

export function NavBar2() {
  // translation
  const { t } = useTranslation();
  const location = useLocation();

  // dark or light mode
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  const theme = useMemo(
    () => createTheme(mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
        <AppBar position="sticky">
          {/* Main Toolbar */}
          <Toolbar disableRipple sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%' }}>
            
            {/* Logo and NightToggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Link to="/">
                <img src={banner} alt="Banner" style={{ height: '200px' }} />
                </Link>
                <Box sx={{ pl: 2 }}>
                <NightToggle onChange={toggleMode} />
                </Box>
            </Box>
          </Toolbar>

          {/* Tabs Toolbar */}
          <Toolbar>
            <Tabs value={location.pathname} variant="fullWidth" centered>
              <Tab label={t('navbar.writing')} component={Link} to="/Writing" sx={activeTabStyle} />
              <Tab label={t('navbar.events')} component={Link} to="/Events" sx={activeTabStyle} />
              <Tab label={t('navbar.others')} component={Link} to="/Others" sx={activeTabStyle} />
              <Tab label={t('navbar.about')} component={Link} to="/About" sx={activeTabStyle} />
              <Tab label={t('navbar.contact')} component={Link} to="/Contact" sx={activeTabStyle} />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

const activeTabStyle = {
  '&.Mui-selected': {
    backgroundColor: 'rgba(255,255,255,0.2)',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
};
