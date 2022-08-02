import * as React from 'react';
import { Outlet } from "react-router";
import {Container} from "@mui/material"
import { NavBar } from "./Navbar";


// ////!\\\\   work on styling the buttons 
// \\\   ///   so they are discreet but visible everywhere


export default function SharedLayout() {
    return(
        <Container>
            <NavBar />
            <Outlet />
        </Container>
    )
}