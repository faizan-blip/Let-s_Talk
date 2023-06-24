import React from 'react'
import {Typography,Button,  Box} from '@mui/material';
import error from './Images/error.jpg'
import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , minHeight:"100vh" , flexDirection:"column" , height:"100%"}}>
<img src={error} alt="cant load" width={500} className='error' />
<Typography className='body1 ' sx={{fontSize:{sm:"40px" , xs:"37px"} , fontWeight:"700"}}>PAGE NOT FOUND</Typography>
<Typography className='body1 '  sx={{textAlign:"center" , width:{sm:"28em", xs:"auto"}}}>Try refining your search or use the navigation below to return to the <span style={{fontWeight:"700"}}> home page </span>and <span style={{fontWeight:"700"}}>login</span> </Typography>
<Link to='/'><Button className='body1 ' variant='contained' sx={{background:"#000 !important" , marginTop:"1em" , textTransform:"none" , fontWeight:"700" , fontSize:"18px"}}>Home</Button></Link>
    </Box>
  )
}
