import { Button, Box } from '@mui/material'
import React from 'react'
import construction from './construction.jpg'

function PopUp(props) {

  return (props.trigger) ? (
    <Box sx={{position:'fixed', display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:`url(${construction})`, width:'100%', height:'100vh'}}>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0, 0.4)', width:'100%'}}>
          <Button sx={{margin:'40px', backgroundColor:'rgba(255,255,35, 0.6)', width:'70px', height:'70px'}} onClick={() => props.setTrigger(false)}>X</Button>
          <Box sx={{color:'white'}}>{props.children}</Box>
        </Box>
    </Box>
  ) : "";
}

export default PopUp