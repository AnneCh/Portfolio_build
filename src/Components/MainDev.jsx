import React from "react";
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Button } from '@mui/material';
import { internalNavDev } from './Navbar' ;

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
        <Container>
            <h1><BoldText>BlockChain Developer</BoldText></h1>
            <p>{t('main_dev.p1')}</p>
            <p>{t('main_dev.p2')}</p>
            <p>{t('main_dev.p3')}</p>
            <p>So I dived into it, in October 2021.<Link to="/WhyBlockchain">(Read more..)</Link></p>
            <Container>
            <internalNavDev />
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Container>
        </Container>
        
    )
}

export default MainDev;