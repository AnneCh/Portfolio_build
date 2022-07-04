import { Outlet } from "react-router";
import { NavBar } from "./Navbar";
import { Container, ThemeProvider, ToggleButton } from '@mui/material';
import i18n from "../i18n";
import DarkDefaultTheme from "../theme";


export default function SharedLayout() {
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
 }
    return(
        <ThemeProvider theme={DarkDefaultTheme}>
            <Container>    
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                <NavBar />
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}