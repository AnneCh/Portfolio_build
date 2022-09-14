import React from "react";
import health from '../health.png';
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

//create a Button in styles to go back to the previous page, or to go back to the Cards
export default function HealthInside() {
    const { t } = useTranslation()

    return (
        <Container sx={{height:'100vh', width:'100vp', backgroundImage:`url(${health})`, backgroundRepeat:'space'}}>
           <Typography sx={{fontWeight:'bold', fontSize:50, textAlign:'center'}}>{t('cards.health.h1')}</Typography>
           <Typography sx={{fontWeight:'italic'}}>{t('cards.health.description')}</Typography>
           <Typography>{t('cards.health.health1')}</Typography><br/>
           <Typography>{t('cards.health.health2')}</Typography><br/>
           <Typography sx={{textAlign:'center',fontSize:20}}>{t('cards.health.health3')}</Typography><br/>
           <Typography sx={{textAlign:'center', fontSize:25}}>{t('cards.health.health4')}</Typography><br/>
           <Typography>{t('cards.health.health5')}</Typography><br/>
           <Typography>{t('cards.health.health6')}</Typography><br/>
           <Typography>{t('cards.health.health7')}</Typography><br/>
           <Typography>{t('cards.health.health8')}</Typography><br/>
           <Typography>{t('cards.health.health9')}</Typography><br/>

        </Container>
    )
}