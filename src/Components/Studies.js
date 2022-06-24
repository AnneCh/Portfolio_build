import React from "react";
import { useTranslation } from 'react-i18next'
import { Link} from 'react-router-dom';
import { Container } from '@mui/material';

function Studies() {
    const { t } = useTranslation()
    return(
        <Container>
            <h2>High School decisions</h2>
            <h2>License</h2>
            <h2>Master</h2>

        </Container>
    )
}

export default Studies