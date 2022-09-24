// a template for the cards that will be displayed on the developer section
// linking to github project

import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProjectTemplate(props) {
  const { t } = useTranslation()
  return (
    <Card sx={{display:'inline-block', alignContent:'space-between'}}>
      <CardMedia
        component="img"
        src={props.img}
        alt="/"
        sx={{height:'80px', width:'80px', padding:'10px'}}
      />
      <CardContent >
        <Typography sx={{padding:'10px'}} gutterBottom>{props.title}</Typography>
        <Typography sx={{padding:'10px'}} variant="body2" color="text.secondary">{props.description}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <Link to={props.link}>
          <Button sx={{padding:'20px'}}size="small">{t('cards.more')}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
