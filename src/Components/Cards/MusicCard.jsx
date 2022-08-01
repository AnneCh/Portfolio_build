import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import music from './music_notes.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CardStyle as classes} from '../Styles/Card';


export default function MartialArts() {
    const { t } = useTranslation()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}
        component="img"
        src={music}
        alt="/"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.heading} gutterBottom>
          {t('cards.music.h1')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {t('cards.music.description')}
        </Typography>
      </CardContent>
      <Divider className={classes.divider} light />
      <CardActions>
        <Link to="/Music_inside">
          <Button size="small">{t('cards.more')}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
