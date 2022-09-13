// a template for the cards that will be displayed on the WhatElse page 
// displaying the other fields of interest that I have
// and each will link to another component, a page, a video, whatever

import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Health(props) {
const { t } = useTranslation()


  return (
    <Card sx={{display:'inline-block'}}>
      <CardMedia
        component="img"
        src={props.img}
        alt="/"
        sx={{height:'200px', width:'200px', padding:'10px'}}
      />
      <CardContent >
        <Typography sx={{padding:'10px'}} gutterBottom>{props.title}</Typography>
        <Typography sx={{padding:'10px'}} variant="body2" color="text.secondary">{props.description}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <Link to={props.more}>
          <Button sx={{padding:'20px'}}size="small">{t('cards.more')}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
