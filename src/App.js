import * as React from 'react';
import { Box, makeStyles } from '@mui/material';
//import './App.css';
import Enter from './Enter.js';

const useStyles = makeStyles((theme) => {})

function App() {
  const classes = useStyles();
  return (
      <Box component="div" sx={{ overflow: 'auto' }}>
        <div>Hello</div>
        <Enter />
      </Box>
  );
}

export default App;




