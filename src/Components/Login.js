import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import login from './Images/Saly-10.png'
import party from './Images/party.png'
import { Link  , useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword , updateProfile } from 'firebase/auth'
import { auth } from './Firebase'
import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { Appcontext } from '../Context/AppContext'
export default function Login({logout}) {
  const {setLogin} = useContext(Appcontext)
    const Navigate = useNavigate()
const [email , setEmail]=useState('')
const [password, setPassword] = useState('')
const[error1 , setError1] = useState(false)
const[errorfill , setErrorfill] = useState(false)
const[errormessage , setErrormessage] = useState('')
const[button , setButton] = useState(false)

const changeemail = (e)=>{
   setEmail(e.target.value)
}
const changepass = (e)=>{
    setPassword(e.target.value)
 }

const[values , setValues] = useState({
    email:'' , 
    password:'',
})

console.log(values , setValues)
const submit = () => {
    if (!email || !password) {
      setErrorfill(true)
     const time =  setTimeout(() => {
        setErrorfill(false)
      },1000);
      return ()=>{
        clearTimeout(time)
      };
    }
  
    signInWithEmailAndPassword(auth, email, password)
    .then(async(res) => {
      setButton(true);
      toast.success('Logged in successfully');
      const user = res.user;
      await updateProfile(user, {
        displayName: email,
      });
      console.log(user)
      setLogin(true)
    setTimeout(() => {
      Navigate('/')
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
    <Box sx={{background:"#9cc2c9" ,  height:{lg:"auto" , xs:"auto" , xl:"100vh"}, display:"flex" ,flexDirection:"column"  , alignItems:"center !important"  , gap:{sm:"20px" , xs:"0px"} , justifyContent:error1 || errorfill  ? 'start' : 'center'}}>
   {
    error1 &&
    <Alert severity="error" sx={{alignSelf:"end" , justifySelf:"flex-start !important" , borderRadius:"0px"}}>{errormessage}</Alert>
   }
   {
    errorfill && 
    <Alert severity="error" sx={{alignSelf:"end" , justifySelf:"flex-start !important" , borderRadius:"0px"}}>Please Fill the Field !!</Alert>
   }
     <ToastContainer />
       <Box sx={{width:{lg:"87%" , xs:"auto" , xl:"70%"},margin:{lg:"0" , xs:"1.5em 1.5em"},minWidth:"300px", height:"auto", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , border: "2px solid rgba(255, 255, 255, 0.06)" , borderRadius:"15px" , display:"flex" , flexWrap:{lg:"nowrap" , xs:"wrap"} , justifyContent:"center" ,alignItems:"center"}}>
              <Box sx={{width:"50%" , height:"100%" , display:"flex" , justifyContent:"center"  , alignItems:"center" , flexDirection:"column"}}>
              <img src={party} alt="" width={50} style={{alignSelf:"end" , position:"relative" , top:"2em"}}/>
              <img src={login} alt="" width={550} style={{alignSelf:{sm:"center" , xs:"start"}}} className='img1'/>
              </Box>
              <Box sx={{width:{lg:"50%" , xs:"100%"} ,height:"100%" , display:"flex" , flexDirection:"column" , padding:"1em 0.5em" , gap:"20px" , marginTop:{lg:"0em" , xs:"2em"}}}>
                <Box sx={{display:"flex" , justifyContent:{sm:"end" , xs:"end"} , alignItems:"center" , gap:"5px" , padding:"1em 0.5em"}}>
                      <Typography sx={{fontSize:{sm:"17px" , xs:"15px"} , fontWeight:"400" ,  color:"#252525"}} className='body1'>Already have an account?</Typography>
                      <Link to='/Sign'>  <Button variant='contained' sx={{background:"#000 !important" , color:"#fff" , fontWeight:"700 !important"}} className='body1'>Register</Button></Link>
                </Box>
                  <Typography sx={{fontSize:{sm:"35px" , xs:"25px"} , alignSelf:"center" , fontWeight:"700"}} className='body1'>HELLO ! Welcome back</Typography>
                  <Typography sx={{fontSize:{sm:"17px" , xs:"15px"} , alignSelf:"center" , fontWeight:"400" , textAlign:"center" , color:"#252525"}} className='body1'>Log in with your data that you have entered during Your registration</Typography>
                  <Box sx={{padding:{lg:"0.5em 3em" , xs:"0em 0.5em"} , display:"flex" , flexDirection:"column" }}>
                    <Typography sx={{alignSelf:"start" , fontWeight:"700"}} className='body1'>Email address</Typography>
                    <input type="email" name="email" id="" placeholder='Enter your email' required value={email} onChange={changeemail} style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%",marginTop:"0.5em"}} />
                    <Typography sx={{alignSelf:"start" , marginTop:"1em" , fontWeight:"700"}} className='body1'>Password</Typography>
                    <input type="password" name="password" id="" placeholder='Enter your password' required value={password} onChange={changepass} style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%",marginTop:"0.5em" }} />
                    {
        button ? (  <Button variant='contained' disabled sx={{background:'#000' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , marginTop:"2em" , height:"3.5em"}} onClick={submit} className='body1'>Log-in</Button>)
        :
        (  <Button variant='contained' sx={{background:'#000 !important' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , marginTop:"2em" , height:"3.5em"}} onClick={submit} className='body1'>Log-in</Button>)
    }
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2em' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Divider />
      </Box>
      <Box sx={{ margin: '0 1em', color: 'grey' , fontWeight:"700" }} className='body1'>OR</Box>
      <Box sx={{ flexGrow: 1 }}>
        <Divider />
      </Box>
    </Box>
                  </Box>
                  <Box sx={{display:"flex", justifyContent:"center" , alignItems:"center" , gap:"5px" , flexWrap:"wrap"}}>
                  <Typography sx={{alignSelf:"center" ,fontSize:{sm:"17px" , xs:"15px"}, fontWeight:"400" ,  color:"#252525"}} className='body1'>Doesn't have an account? <Link to='/Sign'>Sign up</Link> </Typography>
                  <Divider orientation='vertical' sx={{backgroundColor:"grey"}}/>
                <Link to='/'><Button  variant='contained' sx={{background:'#fff !important' , color:"#000 !important" , fontWeight:"700 !important"}}  className='body1'>Back to Home</Button></Link>  
                  </Box>
              </Box>
       </Box>
    </Box>
    </>
  )
}
