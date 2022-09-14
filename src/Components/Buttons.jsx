import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import brain from './brains.png';


export const HomeButton = () => {
    return(
        <Link to="/">
            <Button sx={{backgroundColor:"red", image:{brain}, height:'20px', width:"20px", margin:'5px'}}/>
        </Link>

    )
}