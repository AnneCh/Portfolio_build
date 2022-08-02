import React from "react";
import { useTranslation } from 'react-i18next'
import { Container, Button } from '@mui/material';

export default function WhyBlockchain() {
    const { t } = useTranslation()
    return (
        <section id="about">
            <Container>
                <Container>
                <h1>{t('why_blockchain.title')}</h1>
                <br></br>
                <p>{t('why_blockchain.why')}</p>
                <p>{t('why_blockchain.p1')}</p>
                <p>{t('why_blockchain.p1bis')}</p>
                <p>{t('why_blockchain.p2')}</p>
                <p>{t('why_blockchain.p3')}</p>
                <p>{t('why_blockchain.p4')}</p>
                <p>{t('why_blockchain.p5')}</p>
                <p>{t('why_blockchain.p6')}</p>\
                </Container>
            </Container>
        </section>
    )
}