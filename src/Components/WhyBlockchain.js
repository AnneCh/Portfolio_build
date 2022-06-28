import React from "react";
import { useTranslation } from 'react-i18next'
import { Container, Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function WhyBlockchain() {
    const { t } = useTranslation()
    return (
        <section id="about">
            <Container className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <Container className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
                <Container>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                </Container>
                </Container>
            </Container>
        </section>
    )
}