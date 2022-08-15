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
  SwipeableDrawer,
  Divider,
  createTheme,
  CssBaseline,
  ThemeProvider,
  ToggleButton,
  Hidden, 
  Typography,
  List,
  ListItem} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronRightTwoTone as Chevron } from "@mui/icons-material";

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
                  <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                  <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                  <NightToggle onChange={toggleMode} align="center"/>

                </Menu>
              </Box>
               <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                {pages.map((page) => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={{color:'white', display:'block'}}>
                    {page}
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




/* 

<Hidden xsDown>
              <HomeButton/>
              <NightToggle onChange={toggleMode} align="center"/>
              {pages.map((item) => (
                <Link to={item.to}>{item.name}</Link>
              ))}
              <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
              <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
            </Hidden>
            <Hidden smUp>
                <IconButton>
                  <MenuIcon onClick={()=> setOpen(true)}/>
                </IconButton>
            </Hidden>
          </Toolbar>
          <SwipeableDrawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <div>
              <IconButton> <Chevron onClick={()=> setOpen(false)}/> </IconButton>
            </div>
            <Divider/>
            <List>
              <HomeButton/>
              <NightToggle onChange={toggleMode} align="center"/>
              {pages.map((item) => (
                <ListItem>
                  <Link to={item.to}>{item.name}</Link>
                </ListItem>
              ))}
              <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
              <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
            </List>
          </SwipeableDrawer>

  // const [value, setValue] = useState();

  //to change the navbar list into a burger icon
  // const [anchorElNav, setAnchorElNav] = useState(null)
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // }
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }
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
               <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
                {pages.map((page) => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={{color:'white', display:'block'}}>
                    {page}
                  </Button>
                ))}
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
        </AppBar>*/