import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import BackButton from "./BackButton";

function Jim() {
  return (
    <Container maxWidth="100%" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <BackButton/>

      <Box sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        <img src="link_to_Jim's_photo" alt="Jim's photo" style={{ width: '100%', objectFit: 'cover' }} />
        <Typography variant="h3" component="h1">Jim</Typography>
        <Typography variant="h5" component="h2">Brief introduction about Jim</Typography>
      </Box>

      <Grid container spacing={4}>
        {['Trait 1', 'Trait 2', 'Trait 3', 'Trait 4'].map((trait, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <img src={`link_to_image_for_${trait}`} alt={trait} style={{ width: '100%', objectFit: 'cover' }} />
              <Typography variant="h5" component="h3" gutterBottom>{trait}</Typography>
              <Typography variant="body1">Description for {trait}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>Jim's Video</Typography>
        <iframe title="Jim's Video" width="560" height="315" src="https://www.youtube.com/embed/link_to_youtube_video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>
    </Container>
  );
}

export default Jim;
