import React from "react";
import { useTranslation } from 'react-i18next'
import { Link} from 'react-router-dom';
import { Container, Button, Paper } from '@mui/material';
import { CardStyle } from "./Styles/Card";

function Studies() {
    const { t } = useTranslation()
    return(
        <Container>           
            <h1>{t('studies.studies')}</h1>
            <Paper className="CardStyle">
                <h2>{t('studies.highschool')}</h2>
                <p>{t('studies.hs1')}</p>
                <p>{t('studies.hs2')}</p>
                <p>{t('studies.hs3')}</p>
            </Paper>
            <Paper>
                <h2>{t('studies.license')}</h2>
                <p>{t('studies.lic1')}</p>
                <p>{t('studies.lic2')}</p>
                <p>{t('studies.lic3')}</p>
                <p>{t('studies.lic4')}</p>
            </Paper>
            <Paper>
                <h2>{t('studies.master')}</h2>

            </Paper>
            <Container>
                <Link to="/">
                    <Button>*-*</Button>
                </Link>
            </Container>
        </Container>
    )
}

export default Studies