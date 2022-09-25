import React from "react";
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Button, Box } from '@mui/material';
import Template from './ProjectTemplate';
import {projects, tools} from './data.js'

function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

function MainDev() {
    const { t } = useTranslation()
    const project = projects.map((item) => {
        return(
            <Template
            key={item.id}
            image={item.image}
            subtitle={item.subtitle}
            description={item.description}
            title={item.title}
            more={item.link}
            />
        )
      })

    const toolList = tools.map((tool) => {
        return(
            <ul display="flex">
                <li>{tool}</li>
            </ul>
        )
    })

    return (
        <>

        <Container sx={{display:"flex", padding:"20px", width:"100%"}}>
            <Box sx={{xs:12, md:6, lg:4, paddingTop:"20px", paddingLeft:"50px"}}>
                <h1><BoldText>BlockChain Developer</BoldText></h1>
                <p>{t('main_dev.p1')}</p>
                <p>{t('main_dev.p2')}</p>
                <p>{t('main_dev.p3')}</p>
                <Link to="/WhyBlockchain"><Button>{t('cards.more')}</Button></Link>
            </Box>
            <Box sx={{xs:12, md:6, lg:4, paddingLeft:"50px", paddingTop:"20px"}}>                
                <h2>{t('main_dev.update')}</h2>
                <p>{t('main_dev.list17')}</p>
            </Box>
        </Container>
        <Box sx={{textAlign:'center', margin:8,fontSize:30}}>
            <h3>{t('main_dev.projects')}</h3>
            <Box sx={{paddingLeft:10, margin:8}}>
                {project}<br/>
            </Box>
        </Box>
        <Container>
            <Box sx={{xs:12, md:6, lg:4, paddingLeft:"50px", paddingTop:"20px"}}>
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
            {/* <Box>
            {toolList}
            </Box> */}
        </Container>
        </>
    )
}

export default MainDev;