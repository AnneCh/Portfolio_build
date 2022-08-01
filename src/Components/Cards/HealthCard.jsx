// a template for the cards that will be displayed on the WhatElse page 
// displaying the other fields of interest that I have
// and each will link to another component, a page, a video, whatever



import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import health from './health.png'
import { Link } from 'react-router-dom';

import { CardStyle as classes} from '../Styles/Card';

export default function Health() {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}
        component="img"
        src={health}
        alt="/"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.heading} gutterBottom>
          Health
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Research on endocrinology, foods, tactics to strengthen the immune system.
        </Typography>
      </CardContent>
      <Divider className={classes.divider} light />
      <CardActions>
        <Link to="/HealthCard_inside">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
