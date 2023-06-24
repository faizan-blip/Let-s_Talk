import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useEffect} from 'react'
import landing from './Images/couple-chatting-online-3d-character-illustration-png.png'
import heart from './Images/heart.png'
import couple from './Images/couple.png'
import { Link } from 'react-router-dom'
import { Appcontext } from '../Context/AppContext'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify'
export default function Landing() {
const {user} = useContext(Appcontext)

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      toast.success("Logged-in as " +  user.displayName)
    }
  })
},[])

  return (
    <>
    <ToastContainer/>
    <Box sx={{display:"flex" , alignItems:"center" , height:{lg:"100vh" , xs:"auto"}, justifyContent:{lg:"space-between !important" , xs:"center !important"} , flexWrap:{ld:"nowrap" , xs:"wrap-reverse"} , background:"#16171f"}}>
        <Box  sx={{display:"flex"  , justifyContent:"center" , flexDirection:"column" , paddingLeft:{md:"5em" ,xs:"0.5em"} , marginBottom:"1.5em" }}>
            <img src={heart} alt="" width={50}/>
       <Typography sx={{color:"#fff" , fontSize:{md:"70px" , xs:"56px"} , fontWeight:"700", width:{md:"7em" , xs:"auto"}}} className='body1'>Remind your love with just <span style={{color:"#e25252" , textShadow:"2px 2px 10px #e25252"}}>ONE ALERT</span> </Typography>
       <img src={heart} alt="" width={50} style={{alignSelf:"flex-end"}}/>
       {user ? (
 <Link to='/match' style={{alignSelf:"center"}}><Button sx={{background:"#e25252" , color:"white" , fontWeight:"700" , fontSize:"20px",borderRadius:"17px" , width:"13em" , alignSelf:"center" , boxShadow:"inset 5px -3px 4px rgba(0, 0, 0, 0.25), inset -5px -3px 4px rgba(0, 0, 0, 0.25)"}} className='body1'>Let's Match <img src={couple} alt="" width={50}  /> </Button></Link>   
       ):(
        <Link style={{alignSelf:"center"}}><Button disabled sx={{background:"#e25252" , color:"white" , fontWeight:"700" , fontSize:"20px",borderRadius:"17px" , width:"13em" , alignSelf:"center" , boxShadow:"inset 5px -3px 4px rgba(0, 0, 0, 0.25), inset -5px -3px 4px rgba(0, 0, 0, 0.25)"}} className='body1'>Let's Match <img src={couple} alt="" width={50}  /> </Button></Link>   
       )
   
       }   
    </Box>
         <img src={landing} alt="can't load...." width={550}className='img' />   
    </Box>
    </>
  )
}
