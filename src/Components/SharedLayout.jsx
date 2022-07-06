import { Outlet } from "react-router";
import { NavBar } from "./Navbar";
import { Alert, Container, ToggleButton } from '@mui/material';
import i18n from "../i18n";

//import darkTheme from '../theme';
//import { ThemeProvider } from '@mui/material/styles';


export default function SharedLayout() {
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
 }
    return(
       //<ThemeProvider theme={darkTheme}>
            <Container>    
                <ToggleButton onClick={() => changeLanguage('en')} onMouseOver={Alert('Changer la langue?')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')} onMouseOver={Alert('Change the language?')}>fr</ToggleButton>
                <NavBar />
                <Outlet />
            </Container>
      //  </ThemeProvider>
    )
}