import { Box , Typography } from '@mui/material'
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import lover from './Images/lovers.png' 
import fill from './Images/document.png' 
import chat from './Images/chat.png'
import lap from './Images/laptop.png' 
import feature from './Images/feature.png'
export default function Feature() {

      const data = [
        { id: 1, image: lap  , name:"Create Account"},
        { id: 2, image: lover ,name:"Go to Match"  },
        { id: 3, image: fill , name:"Fill your Details, chance to get Match" },
        { id: 4, image: chat  , name:"Get Chat with room's"},
      ];
    
  return (
    <>
    <div id='feature'>
    <Box sx={{background:"#16171f" ,  height:"auto" , padding:"2em 0.7em" , display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:{lg:"row" , xs:"column-reverse"}}}>
    <Box >
      <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"1.5em", flexWrap:"wrap" , width:{xl:"90%" , xs:"auto"}}}>
     {
      data.map((dataid)=>(
        <Box key={dataid.id} sx={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , padding:"0.5em 0.5em" , height:"100%" , width:"auto" , minWidth:"20em"  , background:"white",boxShadow:"0px 5px 39px rgba(0, 0, 0, 0.25)", color:"black" , gap:"1em" , borderRadius:"10px" }}>
              <img src={dataid.image} alt="" width={50} />
              <Typography sx={{fontSize:"18px" , fontWeight:"700"}}>{dataid.name}</Typography>
        </Box>
      ))
     }
     </Box>
    </Box>
    <Box sx={{}}>
 <img src={feature} alt="" width={700} className='img'  />
 </Box>
    </Box>
    </div>
    </>
  )
}
