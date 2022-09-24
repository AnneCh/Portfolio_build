import React from "react";
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Button, Box } from '@mui/material';

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
        <Container sx={{display:"flex"}}>
            <Box>
                <h1><BoldText>BlockChain Developer</BoldText></h1>
                <p>{t('main_dev.p1')}</p>
                <p>{t('main_dev.p2')}</p>
                <p>{t('main_dev.p3')}</p>
                <Link to="/WhyBlockchain"><Button>(Read more..)</Button></Link>
            </Box>
            <Box sx={{paddingLeft:"20px", paddingRight:"20px", width:"auto"}}>
                <h2>{t('main_dev.goals_title')}</h2>
                <p>{t('main_dev.goals')}</p>
                <p>{t('main_dev.goal1')}</p>
                <p>{t('main_dev.goal2')}</p>
                <p>{t('main_dev.list1')}</p>
                <p>{t('main_dev.list2')}</p>
                <p>{t('main_dev.list3')}</p>
                <p>{t('main_dev.list4')}</p>
                <p>{t('main_dev.list5')}</p>
                <p>{t('main_dev.list6')}</p>
                <p>{t('main_dev.list7')}</p>
                <p>{t('main_dev.list8')}</p>
                <p>{t('main_dev.list9')}</p>
                <p>{t('main_dev.list10')}</p>
                <p>{t('main_dev.list11')}</p>
                <p>{t('main_dev.list12')}</p>
                <p>{t('main_dev.list13')}</p>
                <p>{t('main_dev.list14')}</p>
                <p>{t('main_dev.list15')}</p>
                <p>{t('main_dev.list16')}</p>
            </Box>
            <Box>                
                <h2>{t('main_dev.update')}</h2>
                <p>{t('main_dev.list17')}</p>
            </Box>
        </Container>
        
    )
}

export default MainDev;