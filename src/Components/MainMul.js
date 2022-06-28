import { useTranslation } from 'react-i18next'
import React from "react";
import { Container } from '@mui/material';


function Background() {
    return(
        <Container>
            <p>My background is marketing. International marketing, to be more precise.<br/> But I've never liked the 
            impression of being a cog in a big machinery, so early on, I aimed at working in small companies.
            So I've created opportunities so I could learn and grow alongside entrepreneurs who inspired me. </p><br/>
            <p></p>
        </Container>
    )
}

function Mindbridge() {
    return(
        <Container>
            <p>{t("main_mul.title")}</p>
            <p>{t("main_mul.history")}</p>
            <p>{t("main_mul.start")}</p>
            <p>{t("main_mul.then")}</p>
            <p>{t("main_mul.sound")}</p>

        </Container>
    )
}

function MainMul() {
    const { t } = useTranslation()

    return (
        <Container id="mbm">
            <h1>MindBridge Media, for artists and venues</h1><br/>
            <Background />
            <Mindbridge />
        </Container>
    )
}

export default MainMul