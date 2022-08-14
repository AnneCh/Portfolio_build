import React from "react";
import { Grid, Box } from '@mui/material';
import Health from "./Cards/HealthCard";
import MartialArts from "./Cards/MartialCard";
import MusicCard from "./Cards/MusicCard";

const gridStyle = {
  marginTop: 5,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth:"auto",
  
}


function WhatElse() {

     return (
      <Box sx={{ flexGrow: 3}}>
      <Grid container sx={gridStyle} spacing={4}>
          <Grid item >
            <Health/>
          </Grid>
          <Grid item >
            <MartialArts/>
          </Grid>
          <Grid item >
            <MusicCard/>
          </Grid>
      </Grid>
    </Box>
    );
}

export default WhatElse