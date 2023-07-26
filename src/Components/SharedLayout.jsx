import * as React from 'react';
import { Outlet } from "react-router";
import {Box} from "@mui/material"
import { NavBar2 } from './Navbar2';


// ////!\\\\   work on styling the buttons 
// \\\   ///   so they are discreet but visible everywhere


export default function SharedLayout() {
    return(
        <Box sx={{display:'block', height:'100vh', width:'100%'}}>
            <NavBar2/>
            <Outlet />
        </Box>
    )
}