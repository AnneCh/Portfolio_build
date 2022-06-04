import * as React from 'react';
import { Box, makeStyles } from '@mui/material';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Enter from './Enter.js';

const useStyles = makeStyles((theme) => {})

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>    
      <Box component="div" sx={{ overflow: 'auto' }}>
        <Enter />
      </Box>
    </BrowserRouter> 
  );
}

export default App;




