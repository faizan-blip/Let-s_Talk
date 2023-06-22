import { Box, Typography , Select , MenuItem, Button , Rating  } from '@mui/material'
import React, { useState } from 'react'
import profile from './Images/7309681-removebg-preview.png'
import { styled } from '@mui/material/styles';
import profile1 from './Images/7309675-removebg-preview.png'
import { useRef } from 'react'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
export default function Match() {

    const handleref = useRef(null)
    const handleref1 = useRef(null)
    const[image , setImage] = useState(false)
    const[image1 , setImage1] = useState(false)

    const handleimage = ()=>{
        handleref.current.click();
        console.log('1')
      
    }
    
    const handleimage1 = ()=>{
        handleref1.current.click();
        console.log('1')
      
    }
    const handlechange = (e)=>{
        setImage(e.target.files[0])
    }
    const handlechange1 = (e)=>{
        setImage1(e.target.files[0])
    }
 

    // boy and girl verify
    const[boyname , setBoyname] = useState('') 
    const [boydob, setBoyDob] = useState('');
    const[girlname , setGirlname] = useState('') 
    const [girldob, setGirlDob] = useState('');
   const[boybond , setBoyBond] = useState(10)
   const[girlbond , setGirlBond] = useState(20)
   const handlebondboyChange = (e)=>{
    setBoyBond(e.target.value)
   }
   const handlebondgirlChange = (e)=>{
    setGirlBond(e.target.value)
   }
    const handleboyDateChange = (event) => {
      setBoyDob(event.target.value);
    };

    const handleboynameChange = (e)=>{
    setBoyname(e.target.value);
    }
    const handlegirlDateChange = (event) => {
        setGirlDob(event.target.value);
      };
  
      const handlegirlnameChange = (e)=>{
      setGirlname(e.target.value);
      }

  return (
    <Box sx={{backgroundColor:" #111927", backgroundImage:" radial-gradient(at 47% 33%, hsl(0.00, 71%, 60%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.18, 39%, 11%) 0, transparent 55%)" , height:"100%",minHeight:"100vh" , display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"1em" , padding:"0.5em 0.7em"}}>
        <Box>
             <Link to='/' style={{textDecoration:"none"}}><Typography sx={{display:"flex" , justifyContent:"center"  ,alignItems:"center" , gap:"2px", color:"#000" ,fontWeight:"700" , fontSize:{sm:"20px" , xs:"15px"} }} className='body1'><KeyboardReturnIcon/> Back To Home</Typography></Link>  
        <Typography sx={{fontSize:{sm:"49px !important" , xs:"29px !important"} , fontWeight:"700" , opacity:"0.4" , color:"whitesmoke"}}   className='logo'>Let's Match the Vibe</Typography>
        </Box>
        <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"4em" , flexDirection:{md:"row" , xs:"column"}}}>
     {/* boy */}
     
      <Box sx={{display:"flex" , flexDirection:"column" , height:"100%" , minWidth:{sm:"20em" , xs:"280px"},width:"100%", padding:"1em 0.5em" , borderRadius:"7px" ,backdropFilter:" blur(16px) saturate(180%)" , background:" rgba(0, 0, 0, 0.50)", border:"1px solid rgba(255, 255, 255, 0.125)", justifyContent:"center" , alignItems:"center" , gap:"10px"}}>
      <StyledRating
        name="customized-color"
        defaultValue={4}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{alignSelf:"flex-end" , display:"flex"}}
      />
       <Box onClick={handleimage}>
        {
            image ? (
                <img src={URL.createObjectURL(image)} alt="" width={200} />
            ):(
                <img src={profile} alt="" width={200} />
            )
        }
        <input type="file" style={{display:"none"}} ref={handleref} onChange={handlechange} />
        </Box>
       
        <Box sx={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Box>
        <Typography sx={{alignSelf:"start" , fontWeight:"700"}} className='body1'>Full Name</Typography>
                    <input type="text" name="name" id="boyname" placeholder='Enter your name' value={boyname} onChange={handleboynameChange} required style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%"}} />
                    </Box>
                    <Box>
                    <Typography sx={{alignSelf:"start" , fontWeight:"700"}} className='body1'>DOB</Typography>
                    <input
            type="date"
            value={boydob}
            id='boydob'
            onChange={handleboyDateChange}
            min='2003-01-01'
            max='2020-01-01'
            style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%"}}
          />
          </Box>
          <Typography sx={{display:"flex" , alignItems:"center" , gap:"5px" , color:"white" , fontWeight:"700"}} className='body1'> <DataSaverOnIcon sx={{color:"white"}}/> Add Interest</Typography>
          <Box>
          <Select
          value={boybond}
          label="Bond"
          id='boybond'
          onChange={handlebondboyChange}
          sx={{ color: 'white', '& .MuiSelect-root': { borderColor: 'white !important' } }}
        >
          <MenuItem value={10}>Romantic Bond</MenuItem>
          <MenuItem value={20}>Sexual Bond</MenuItem>
          <MenuItem value={30}>Endure Bond</MenuItem>
        </Select>
          </Box>
        </Box>
      </Box>
      {/* girl */}
      <Box sx={{display:"flex" , flexDirection:"column" , height:"100%" ,minWidth:{sm:"20em" , xs:"280px"}, width:"100%", padding:"1em 0.5em" , borderRadius:"7px" ,backdropFilter:" blur(16px) saturate(180%)" , background:" rgba(0, 0, 0, 0.50)", border:"1px solid rgba(255, 255, 255, 0.125)", justifyContent:"center" , alignItems:"center" , gap:"10px"}}>
      <StyledRating
        name="customized-color"
        defaultValue={5}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{alignSelf:"flex-end" , display:"flex"}}
      />
      <Box onClick={handleimage1}>
        {
            image1 ? (
                <img src={URL.createObjectURL(image1)} alt="" width={200} />
            ):(
                <img src={profile1} alt="" width={200} />
            )
        }
        <input type="file" style={{display:"none"}} ref={handleref1} onChange={handlechange1} />
        </Box>
        <Box sx={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Box>
        <Typography sx={{alignSelf:"start" , fontWeight:"700"}} className='body1'>Full Name</Typography>
                    <input type="text" name="name" id="girlname" placeholder='Enter your name' value={girlname} onChange={handlegirlnameChange} required style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%"}} />
                    </Box>
                    <Box>
                    <Typography sx={{alignSelf:"start" , fontWeight:"700"}} className='body1'>DOB</Typography>
                    <input
            type="date"
            value={girldob}
            id='girldob'
            onChange={handlegirlDateChange}
            min='2003-01-01'
            max='2020-01-01'
            style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%" }}
          />
          </Box>
          <Typography sx={{display:"flex" , alignItems:"center" , gap:"5px" , color:"white" , fontWeight:"700"}} className='body1'> <DataSaverOnIcon sx={{color:"white"}}/> Add Interest</Typography>
          <Box>
          <Select 
          value={girlbond}
          label="Bond"
          id='girlbond'
          onChange={handlebondgirlChange}
          sx={{ color: 'white', '& .MuiSelect-root': { borderColor: 'white !important' } }}
        >
          <MenuItem value={10}>Romantic Bond</MenuItem>
          <MenuItem value={20}>Sexual Bond</MenuItem>
          <MenuItem value={30}>Endure Bond</MenuItem>
        </Select>
          </Box>
        </Box>
      </Box>
      </Box>
      <Button variant='contained' sx={{gap:"5px" , display:"flex" , borderRadius:"15px" , fontWeight:"700" , fontSize:"22px" , background:"#e25252 !important", textTransform:"none"}}><FavoriteIcon/> Let's Match</Button>
    </Box>
  )
}
