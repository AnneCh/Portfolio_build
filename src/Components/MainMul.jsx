import { useTranslation } from 'react-i18next'
import React from "react";
import { Container, Box } from '@mui/material';
import ImageList from './ImageList';

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
            <ImageList/>
            <p>{t("main_mul.DJ")}</p>
            <p>{t("main_mul.kevin")}</p>
            <p>{t("main_mul.moving")}</p>
            <p>{t("main_mul.presence")}</p>
            <Box>
                <h4>{t("main_mul.skills")}</h4>
                <p>{t("main_mul.skill1")}</p>
                <p>{t("main_mul.skill2")}</p>
                <p>{t("main_mul.skill3")}</p>
            </Box>
        </Container>
    )
}

export default MainMul