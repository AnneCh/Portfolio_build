import * as React from 'react';
import { useState, useMemo } from 'react';
import i18n from "../i18n";
import { Outlet } from "react-router";

import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    Container, 
    ToggleButton,
  } from "@mui/material"
import { darkTheme } from './Styles/Dark.jsx';
import { lightTheme } from './Styles/Light.jsx';
import { ColorModeContext } from './Styles/color-context.jsx';

import NavBar from "./Navbar";



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


    return(
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                    <Container>
                        <ToggleButton onClick={toggleMode}>Toggle theme</ToggleButton>
                        <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                        <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                        <NavBar />
                        <Outlet />
                    </Container>
            </ThemeProvider>
    )
}