import { Button, Container } from "@mui/material"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'


function Error(){
    return(
        <Container>
            <div>
                <h1>404</h1>
                <h3 align="center">Wrong page, buddy!</h3>
            </div>
            <Link to="/">
                <Button>Home</Button>
            </Link>
        </Container>
    )
}

export default Error