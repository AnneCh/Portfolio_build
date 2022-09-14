import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import brain from './brains.png';


export const HomeButton = () => {
    return(
        <Box sx={{padding:'30px'}}>
            <Link to="/">
                <img src={brain} height="50px" width="50px" padding="20px"/>
            </Link>
         </Box>
    )
}