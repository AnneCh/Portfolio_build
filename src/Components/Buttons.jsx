import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from './logo.png';


export const HomeButton = () => {
    return(
        <Box sx={{padding:'30px'}}>
            <Link to="/">
            <img src={logo} style={{ height: 'auto', maxWidth: '100%', maxHeight: '100px', padding: '20px' }} />
            </Link>
         </Box>
    )
}