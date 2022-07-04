import { Outlet } from "react-router";
import { NavBar } from "./Navbar";
import { Container, ToggleButton } from '@mui/material';
import i18n from "../i18n";

import darkTheme from '../theme';
import { ThemeProvider } from '@mui/material/styles';


export default function SharedLayout() {
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
 }
    return(
        <ThemeProvider theme={darkTheme}>
            <Container>    
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                <NavBar />
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}