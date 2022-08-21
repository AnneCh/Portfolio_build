import React from "react";
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Button } from '@mui/material';

// Introduce quickly why blockchain developer with option to read more about it (links to an 
//additional page where I'll either write or make a video of why I chose it

// Then list languages that I'm learning 

// Then A few (3) images or boxes that link to the major projects I'm undertaking (github)

// then a link to WhatElse and one to the Multimedia part and Contact 

function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

function MainDev() {
    const { t } = useTranslation()

    return (
        <Container posirion="flex">
            <Container>
            <h1><BoldText>BlockChain Developer</BoldText></h1>
            <p>{t('main_dev.p1')}</p>
            <p>{t('main_dev.p2')}</p>
            <p>{t('main_dev.p3')}</p>
            <Link to="/WhyBlockchain"><Button>(Read more..)</Button></Link>
            </Container>
            <Container>
            <h2>{t('main_dev.goals_title')}</h2>
            <p>{t('main_dev.goals')}</p>
            <p>{t('main_dev.goal1')}</p>
            <p>{t('main_dev.goal2')}</p>

            </Container>
        </Container>
        
    )
}

export default MainDev;