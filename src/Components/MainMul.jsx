import { useTranslation } from 'react-i18next'
import React from "react";
import { Link} from 'react-router-dom';
import { Container, Button } from '@mui/material';

function MainMul() {
    const { t } = useTranslation()
    return(
        <Container>
            <h1>{t("main_mul.title")}</h1> 
            <h4>{t("main_mul.history")}</h4>
            <p>{t("main_mul.start")}</p>
            <p>{t("main_mul.then")}</p>
            <p>{t("main_mul.sound")}</p>
            <p>{t("main_mul.invest")}</p>
            <p>{t("main_mul.DJ")}</p>
            <Container>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Container>
        </Container>
    )
}

export default MainMul