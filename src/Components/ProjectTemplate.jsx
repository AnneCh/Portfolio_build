// a template for the cards that will be displayed on the developer section
// linking to github project

import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ProjectTemplate(props) {
  const { t } = useTranslation()
  return (
    <Card sx={{display:"inline-block"}}>
      <a href={props.more} target="_blank">
      <CardMedia
        component="img"
        src={props.image}
        alt="loading.."
        sx={{height:'330px', width:"300px", padding:5}}
      />
      </a><Divider light />
      <CardContent >
        <Typography sx={{padding:'10px', fontSize:30}} gutterBottom>{props.subtitle}</Typography>
        <Typography sx={{padding:'10px'}}><span color='grey'>{t("main_dev.lang")}</span>: {props.title}</Typography>
        <Typography sx={{padding:'10px'}}>{props.description}</Typography>
      </CardContent>
      <Divider light />
    </Card>
  );
}
