import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export const HomeButton = () => {
    return(
        <Button sx={{textDecoration:"none", paddingBlock:2, textShadow:'2px'}}>
            <Link to="/">
                Ξ
            </Link>
        </Button>
    )
}