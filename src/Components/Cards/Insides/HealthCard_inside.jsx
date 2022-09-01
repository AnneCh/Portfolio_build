import React from "react";
import health from '../health.png';
import { Container, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

//create a Button in styles to go back to the previous page, or to go back to the Cards
export default function HealthInside() {
    const { t } = useTranslation()


    return (
        <Container>
           <img sx={{maxHeight:'50px', maxWdith:'50px'}} src={health}/>
           <p>{t('health.h1')}</p>
           <Typography>{t('health.description')}</Typography>
           <Typography>{t('health.health1')}</Typography>
           <Typography>{t('health.health2')}</Typography>
           <Typography>{t('health.health3')}</Typography>
           <Typography>{t('health.health4')}</Typography>
           <Typography>{t('health.health5')}</Typography>
           <Typography>{t('health.health6')}</Typography>
           <Typography>{t('health.health7')}</Typography>
           <Typography>{t('health.health8')}</Typography>
           <Typography>{t('health.health9')}</Typography>

        </Container>
    )
}