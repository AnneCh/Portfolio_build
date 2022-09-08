import { Button, Box } from '@mui/material'
import React from 'react'

function PopUp(props) {
  return (props.trigger) ? (
    <Box sx={{backgroundColor:"red", width:'100vh', height:'70px', marginTop:'0', margin:'0'}}>
        <Button sx={{position:"absolute", right:'50px'}}>X</Button>
        {props.children}
    </Box>
  ) : "";
}

export default PopUp