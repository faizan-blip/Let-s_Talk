import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import login from './Images/vecteezy_3d-illustration-chatting-when-sitting-in-the-sofa_20946472_977.png'
import party from './Images/party.png'
import { Link , useNavigate} from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import { auth } from './Firebase'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Alert from '@mui/material/Alert';
export default function Sign() {
    const [checked, setChecked] = useState(true);
  const Navigate = useNavigate()

    const [name , setName]=useState('')
const [email , setEmail]=useState('')
const [password, setPassword] = useState('')
const[error1 , setError1] = useState(false)
const[errormessage , setErrormessage] = useState('')
const[errorfill , setErrorfill] = useState(false)
const[button , setButton] = useState(false)
const changeemail = (e)=>{
   setEmail(e.target.value)
}
const changepass = (e)=>{
    setPassword(e.target.value)
 }
 const changename = (e)=>{
    setName(e.target.value)
 }
 const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const[values , setValues] = useState({
    name:"",
    email:"" , 
    password:"",
})
console.log(values , setValues)
const submit = () => {
    if (!name || !email || !password || !checked) {
      setErrorfill(true)
      const time =  setTimeout(() => {
         setErrorfill(false)
       },1000);
       return ()=>{
         clearTimeout(time)
       };
    }
  
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(res) => {
      setButton(true);
      toast.success('Signing up Successfully')
      const user = res.user;
      await updateProfile(user, {
        displayName: name,
      });
      setTimeout(() => {
        Navigate('/Login')
      },2000);
    
        const timeout = setTimeout(() => {
          setButton(false);
        }, 2000);
    
      return () => {
        clearTimeout(timeout);
      };


    })
    .catch((error) => {
      setError1(true);
      setErrormessage(error.message);
      if (error) {
        setButton(true);
    
        const timeout = setTimeout(() => {
          setButton(false);
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
      } else {
        setButton(false);
      }
    });
  
  };
  


  return (
    <>
    <Box sx={{background:"#9cc2c9" ,  height:{lg:"auto" , xs:"auto" , xl:"100vh"}, display:"flex" ,flexDirection:"column"  , alignItems:"center !important"  , gap:{sm:"20px" , xs:"0px"} , justifyContent:error1 || errorfill ? 'start' : 'center'}}>
   {
    error1 &&
    <Alert severity="error" sx={{alignSelf:"end" , justifySelf:"flex-start !important" , borderRadius:"0px"}}>{errormessage}</Alert>
   }
   {
    errorfill && 
    <Alert severity="error" sx={{alignSelf:"end" , justifySelf:"flex-start !important" , borderRadius:"0px"}}>Please Fill the Field !!</Alert>
   }
         <ToastContainer />
       <Box sx={{width:{lg:"87%" , xs:"auto" , xl:"70%"},margin:{lg:"0" , xs:"1.5em 1.5em"},minWidth:"300px", height:"auto", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , border: "2px solid rgba(255, 255, 255, 0.06)" , borderRadius:"15px" , display:"flex" , flexWrap:{lg:"nowrap" , xs:"wrap"} , justifyContent:"center" ,alignItems:"center",}}>
              <Box sx={{width:"50%" , height:"100%" , display:"flex" , justifyContent:"center"  , alignItems:"center" , flexDirection:"column"}}>
              <img src={party} alt="" width={50} style={{alignSelf:"end" , position:"relative" , top:"2em"}}/>
              <img src={login} alt="" width={550} style={{alignSelf:{sm:"center" , xs:"start"}}} className='img1'/>
              </Box>
              <Box sx={{width:{lg:"50%" , xs:"100%"},height:"100%" , display:"flex" , flexDirection:"column" , padding:"1em 0.5em" , gap:"20px"}}>
                <Box sx={{display:"flex" , padding:"1em 0.5em" , justifyContent:"space-between" , alignItems:"center" , flexWrap:"wrap" }}>
                <Link to='/' style={{textDecoration:"none"}}><Typography sx={{display:"flex" , justifyContent:"center"  ,alignItems:"center" , gap:"2px", color:"#000" ,fontWeight:"700" }} className='body1'><KeyboardReturnIcon/> Back To Home</Typography></Link>  
                <Box sx={{display:"flex" , justifyContent:{sm:"end" , xs:"end"}  , alignItems:"center" , gap:"5px", alignSelf:"end" }}>
                      <Typography sx={{fontSize:{sm:"17px" , xs:"15px"}  , fontWeight:"400" ,  color:"#252525"}} className='body1'>Already a member?</Typography>
                      <Link to='/Login'>  <Button variant='contained' sx={{background:"#000 !important" , color:"#fff" , fontWeight:"700 !important"}} className='body1'>Log-in</Button></Link>
                </Box>
                </Box>
                  <Typography sx={{fontSize:{sm:"35px" , xs:"25px"} , alignSelf:"center" , fontWeight:"700"}} className='body1'>Sign up to Let's talk</Typography>
                  <Typography sx={{fontSize:{sm:"17px" , xs:"15px"}  , alignSelf:"center" , fontWeight:"400" , textAlign:"center" , color:"#252525"}} className='body1'>Register Yourself For Free</Typography>
                  <Box sx={{padding:{lg:"0.5em 3em" , xs:"0em 0.5em"}  , display:"flex" , flexDirection:"column" }}>
                  <Typography sx={{alignSelf:"start" , fontWeight:"700"}} className='body1'>Full Name</Typography>
                    <input type="text" name="name" id="" placeholder='Enter your name' required value={name} onChange={changename} style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%",marginTop:"0.5em"}} />
                    <Typography sx={{alignSelf:"start" , fontWeight:"700" , marginTop:"1em"}} className='body1'>Email address</Typography>
                    <input type="email" name="email" id="" placeholder='Enter your email' required value={email} onChange={changeemail} style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%",marginTop:"0.5em"}} />
                    <Typography sx={{alignSelf:"start" , marginTop:"1em" , fontWeight:"700"}} className='body1'>Password</Typography>
                    <input type="password" name="password" id="" placeholder='Enter your password' required value={password} onChange={changepass} style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%",marginTop:"0.5em" }} />
                    <Box sx={{alignSelf:"start" , display:"flex"}}>
                    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> <Typography className='body1' sx={{alignSelf:"center" ,fontSize:{sm:"17px" , xs:"15px"}}}>Accept all Terms & Condition</Typography>
    </Box>
    {
        button ? (  <Button variant='contained' disabled sx={{background:'#000' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , marginTop:"2em" , height:"3.5em"}} onClick={submit} className='body1'>Create an account</Button>)
        :
        (  <Button variant='contained' sx={{background:'#000 !important' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , marginTop:"2em" , height:"3.5em"}} onClick={submit} className='body1'>Create an account</Button>)
    }
                  
                 
                  </Box>
              </Box>
       </Box>
    </Box>
    </>
  )
}
