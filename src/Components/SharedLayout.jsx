import { Outlet } from "react-router";
import NavBar from "./Navbar";
import { Container, ToggleButton } from '@mui/material';
import { Image } from "@mui/icons-material";
import i18n from "../i18n";
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from '../Styles/Styles';
import { ThemeProvider } from '@mui/material/styles';

export default function SharedLayout() {
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
 }
    return(
         <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container>
                <Image src={ 
                    mode === "dark"
                    ? "public/images/light.png"
                    : "public/images/dark.png"
                }
                height = {50}
                width={50}
                alt='night_toggle'/>
                <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
                <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
                <NavBar />
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}