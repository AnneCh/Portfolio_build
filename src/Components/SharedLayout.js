import { Outlet } from "react-router";
import { NavBar } from "./Navbar";
import { Container, ToggleButton } from '@mui/material';
import {Box, FormControlLabel, Switch} from '@mui/material';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import CheckIcon from '@mui/icons-material/Check';
import i18n from "../i18n";



export default function SharedLayout() {
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
 }
    return(
        <Container>    
            <ToggleButton onClick={() => changeLanguage('en')}>en</ToggleButton>
            <ToggleButton onClick={() => changeLanguage('fr')}>fr</ToggleButton>
            <NavBar />
            <Outlet />
        </Container>
    )
}