// a template for the cards that will be displayed on the WhatElse page 
// displaying the other fields of interest that I have
// and each will link to another component, a page, a video, whatever



import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import health from './health.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Health() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardMedia
        component="img"
        src={health}
        alt="/"
      />
      <CardContent >
        <Typography  gutterBottom>{t('cards.health.h1')}</Typography>
        <Typography variant="body2" color="text.secondary">{t('cards.health.description')}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <Link to="/HealthCard_inside">
          <Button size="small">{t('cards.more')}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
