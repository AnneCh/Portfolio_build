import { Button, Container } from "@mui/material"
import { Link } from "react-router-dom"

function Error(){
    return(
        <Container>
            <div>
                <h1>This is not a correct page</h1>
            </div>
            <Link to="/">
                <Button>Home</Button>
            </Link>
        </Container>
    )
}

export default Error