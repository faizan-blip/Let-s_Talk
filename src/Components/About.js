import { Box, Typography } from '@mui/material'
import React from 'react'
import about from './Images/e99c3904-b639-4a11-960c-0cf05567ba08.png'
import story from './Images/story.png'
import lover from './Images/lovers.png'
import about2 from './Images/about2.png'
export default function About() {
  return (
    <>
    <div id='about'>
   <Box sx={{background:"#e6efee" ,  height:{lg:"100vh" , xs:"auto"}, display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , flexWrap:{xl:"nowrap" , lg:"nowrap" , xs:"wrap"} , padding:"1.5em 0"}}>
          <img src={about} alt="" width={800} className='img' />
          <Box sx={{display:"flex" , flexDirection:"column" , gap:"15px" , width:{xl:"45%" , xs:"auto" , lg:"40%"} , marginRight:{lg:"5em" , xs:"0em"} , alignContent:"center"}}>
            <Box sx={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background:"#f5f5f5", boxShadow:" inset 4px 5px 9px rgba(0, 0, 0, 0.36)" , borderRadius:"17px" , height:"auto" ,width:"15em",padding:"0.5em 1em",minWidth:"200px !important", alignSelf:{md:"start" , xs:"center"} }}>
                <img src={lover} alt="" width={40} />
                <Typography sx={{fontWeight:"700"}}>Vision</Typography>
                <Typography sx={{color:"#cdc9c3" , fontWeight:"400"}} > Creating Meaningful Connections</Typography>
            </Box>
            <Box sx={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background:"#f5f5f5", boxShadow:" inset 4px 5px 9px rgba(0, 0, 0, 0.36)" , borderRadius:"17px" , height:"auto", width:"15em",padding:"0.5em 1em",minWidth:"200px !important",alignSelf:"center"}}>
                <img src={about2} alt="" width={40} />
                <Typography sx={{fontWeight:"700"}}>Meet the Team</Typography>
                <Typography sx={{color:"#cdc9c3" , fontWeight:"400"}} >Passionate Matchmakers Dedicated to Your Success</Typography>
            </Box>
            <Box sx={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , background:"#f5f5f5", boxShadow:" inset 4px 5px 9px rgba(0, 0, 0, 0.36)" , borderRadius:"17px" , height:"auto", width:"15em",padding:"0.5em 1em",minWidth:"200px !important",alignSelf:{md:"end" , xs:"center"}}}>
                <img src={story} alt="" width={40} />
                <Typography sx={{fontWeight:"700"}}>Why Choose Us</Typography>
                <Typography  sx={{color:"#cdc9c3" , fontWeight:"400"}}>Elevating Online Dating Experiences</Typography>
            </Box>
          </Box>
    </Box> 
    </div>
    </>
  )
}
