import { Outlet } from "react-router";
import { NavBar } from "./Navbar";

export default function SharedLayout() {
    return(
        <>
        <NavBar />
        <Outlet />
        </>
    )

}