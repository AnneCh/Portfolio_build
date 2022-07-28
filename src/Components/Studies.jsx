import React from "react";
import { useTranslation } from 'react-i18next'
import { Link} from 'react-router-dom';
import { Container, Button, Paper } from '@mui/material';

function Studies() {
    const { t } = useTranslation()
    return(
        <Container>           
            <h1>{t('studies.studies')}</h1>
            <Paper>
                <h2>{t('studies.highschool')}</h2>
                <p>{t('studies.hs1')}</p>
                <p>{t('studies.hs2')}</p>
                <p>{t('studies.hs3')}</p>
                <p>{t('studies.hs4')}</p>
            </Paper>
            <Paper>
                <h2>{t('studies.license')}</h2>

            </Paper>
            <Paper>
                <h2>{t('studies.master')}</h2>

            </Paper>
            <Container>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Container>
        </Container>
    )
}

export default Studies