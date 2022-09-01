import React from "react";
import health from '../health.png';
import { Container, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

//create a Button in styles to go back to the previous page, or to go back to the Cards
export default function HealthInside() {
    const { t } = useTranslation()


    return (
        <Container>
           <h1>{t('cards.health.h1')}</h1>
           <h2>{t('cards.health.description')}</h2>
           <p>{t('cards.health.health1')}</p>
           <p>{t('cards.health.health2')}</p>
           <p>{t('cards.health.health3')}</p>
           <p>{t('cards.health.health4')}</p>
           <p>{t('cards.health.health5')}</p>
           <p>{t('cards.health.health6')}</p>
           <p>{t('cards.health.health7')}</p>
           <p>{t('cards.health.health8')}</p>
           <p>{t('cards.health.health9')}</p>

        </Container>
    )
}