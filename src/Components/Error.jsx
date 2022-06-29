import { Button, Container } from "@mui/material"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'


function Error(){
    const { t } = useTranslation()

    return(
        <Container>
            <h1>404</h1>
            <h3>{t('error')}</h3>
            <Link to="/">
                <Button>Home</Button>
            </Link>
        </Container>
    )
}

export default Error