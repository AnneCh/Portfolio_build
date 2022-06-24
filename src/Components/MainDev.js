import React from "react";
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';

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
            <h1>BlockChain Developer</h1>
            <br className="hidden lg:inline-block" />
            <p>{t('main_dev.p1')}</p>
                        So I dived into it, in October 2021.<Link to="/WhyBlockchain">(Read more..)</Link>
        </Container>
    )
}

export default MainDev;