import * as React from 'react';
import { useState, useMemo } from 'react';
import { ColorModeContext } from './Styles/color-context.jsx';
import i18n from "../i18n";
import { Outlet } from "react-router";

import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    Container, 
    ToggleButton,
    useTheme, 
  } from "@mui/material"

import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';

import Box from '@mui/material/Box';
import DarkIcon from './imgs/dark.png';
import BrightIcon from './imgs/light.png';

import NavBar from "./Navbar";

import { Image } from '@mui/icons-material';



export default function SharedLayout() {
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
    );
    // const themeButton = useTheme();
    // const colorMode = React.useContext(ColorModeContext);


    return(
        <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />

            <Box>
            <Container  display='flex'>
                <ToggleButton onClick={toggleMode} align="center">
                <Image src={'./imgs/dark.png'}></Image>
                </ToggleButton>
            </Container>
            <Container display='flex'>
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
            </Container>
            </Box>
            <Container>
                <NavBar />
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}