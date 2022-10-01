import { useTranslation } from 'react-i18next'
import React from "react";
import { Container, Box, Typography } from '@mui/material';
import ImageList from './ImageList/ImageList';

function MainMul() {
    const { t } = useTranslation()
    return(
        <Container sx={{width:'100%'}}>
            <h1>{t("main_mul.title")}</h1> 
            <h3>{t("main_mul.history")}</h3>
            <Typography>{t("main_mul.start")}</Typography><br/>
            <Typography>{t("main_mul.then")}</Typography><br/>
            <Typography sx={{textAlign:'right',fontSize:18, fontWeight:"bold"}}>{t("main_mul.sound")}</Typography><br/>
            <Typography sx={{textAlign:'center',fontSize:20}}>{t("main_mul.invest")}</Typography>
            <ImageList/>
            <Typography>{t("main_mul.DJ")}</Typography><br/>
            <Typography>{t("main_mul.kevin")}</Typography><br/>
            <Typography>{t("main_mul.moving")}</Typography><br/>
            <Typography>{t("main_mul.presence")}</Typography><br/>
            <Box>
                <h4>{t("main_mul.skills")}</h4>
                <Typography>{t("main_mul.skill1")}</Typography>
                <br/>
                <Typography>{t("main_mul.skill2")}</Typography>
                <br/>
                <Typography>{t("main_mul.skill3")}</Typography>
            </Box>
        </Container>
    )
}

export default MainMul