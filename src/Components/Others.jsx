import React from "react";
import { Grid, Box } from '@mui/material';
import Health from "./Cards/HealthCard";
import MartialArts from "./Cards/MartialCard";
import MusicCard from "./Cards/MusicCard";



function Others() {

     return (
      
        <Grid container>
          <Grid item xs={12} md={8} xl={3}>
            <Health/>
          </Grid>
          <Grid item xs={12} md={8} xl={3}>
            <MartialArts/>
          </Grid>
          <Grid item xs={12} md={8} xl={3}>
            <MusicCard/>
          </Grid>
        </Grid>
   
    );
}

export default Others