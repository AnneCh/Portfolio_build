import { useTranslation } from 'react-i18next'
import React from "react";
import { Container } from '@mui/material';
import exit  from "./exit.jpg"

function MainMul() {
    const { t } = useTranslation()
    return(
        <Container sx={{backgroundImage:({exit})}}>
            <h1>{t("main_mul.title")}</h1> 
            <h4>{t("main_mul.history")}</h4>
            <p>{t("main_mul.start")}</p>
            <p>{t("main_mul.then")}</p>
            <p>{t("main_mul.sound")}</p>
            <p>{t("main_mul.invest")}</p>
            <p>{t("main_mul.DJ")}</p>
            <p>{t("main_mul.kevin")}</p>
            <p>{t("main_mul.moving")}</p>
            <p>{t("main_mul.presence")}</p>
            <Container>
            <h4>{t("main_mul.skills")}</h4>
            </Container>
        </Container>
    )
}

export default MainMul