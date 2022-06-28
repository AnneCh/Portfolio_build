import { useTranslation } from 'react-i18next'
import React from "react";
import { Container } from '@mui/material';


function MainMul() {
    const { t } = useTranslation()
    return(
        <Container>
            <h1>{t("main_mul.title")}</h1> 
            <h4>{t("main_mul.history")}</h4>
            <p>{t("main_mul.start")}</p>
            <p>{t("main_mul.then")}</p>
            <p>{t("main_mul.sound")}</p>
        </Container>
    )
}

export default MainMul