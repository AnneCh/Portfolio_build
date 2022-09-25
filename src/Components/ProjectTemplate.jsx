// a template for the cards that will be displayed on the developer section
// linking to github project

import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ProjectTemplate(props) {
  const { t } = useTranslation()
  return (
    <Card sx={{display:'inline-block', alignContent:'space-between'}}>
      <CardMedia
        component="img"
        src={props.image}
        alt="loading.."
        sx={{height:'330px', width:'300px', padding:'10px'}}
      />
      <CardContent >
        <Typography sx={{padding:'10px'}} gutterBottom>{props.subtitle}</Typography>
        <Typography sx={{padding:'10px'}}><span color='grey'>{t("main_dev.lang")}</span>: {props.title}</Typography>
        <Typography sx={{padding:'10px'}}>{props.description}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <a href={props.more} target="_blank">
          <Button sx={{padding:'20px'}}size="small">{t('cards.more')}</Button>
        </a>
      </CardActions>
    </Card>
  );
}
