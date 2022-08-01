import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { whatelse } from "./data.js";
import { Grid, Box, Button } from '@mui/material';
import Health from "./Cards/HealthCard";
import MartialArts from "./Cards/MartialCard";
import MusicCard from "./Cards/MusicCard";

const gridStyle = {
  marginTop: 5,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth:"auto"
}


function WhatElse() {
  const { t } = useTranslation()

     return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={gridStyle} spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Health/>
            <MartialArts/>
            <MusicCard/>
          </Grid>
      </Grid>
    </Box>






    //   <Container>
    //     <h1>  What else do I spend my time thinking about.</h1>
    //         <div className="flex flex-wrap m-4">
    //           {whatelse.map((whatelse) => (
    //             <div className="p-4 md:w-1/2 w-full">
    //               <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
    //                 <p className="leading-relaxed mb-6">{whatelse.topic}</p>
    //                 <div className="inline-flex items-center">
    //                   <img
    //                     alt=""
    //                     src={whatelse.image}
    //                     className="w-12 rounded-full flex-shrink-0 object-cover object-center"
    //                   />
    //                   <span className="flex-grow flex flex-col pl-4">
    //                     <span className="title-font font-medium text-white">
    //                       {whatelse.more}
    //                     </span>
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //         <Container>
      //           <Link to="/">
      //               <Button>Home</Button>
      //           </Link>
      //       </Container>
      // </Container>
       );
}

export default WhatElse