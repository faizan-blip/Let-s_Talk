import { Box, Typography , Select , MenuItem, Button , Rating , IconButton , Fab } from '@mui/material'
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelIcon from '@mui/icons-material/Cancel';
import { toast , ToastContainer } from 'react-toastify';
import { Hearts } from 'react-loader-spinner';
import ReplayIcon from '@mui/icons-material/Replay';
import ChatIcon from '@mui/icons-material/Chat';
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
   const[interestboy , setInterestboy] = useState('')
   const[boyadd , setBoyadd] = useState([])
   const[interestgirl , setInterestgirl] = useState('')
   const[girladd , setGirladd] = useState([])
   const[showspin , setShowspin] = useState(false)
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

      const [open, setOpen] = useState(false);
      const [open1, setOpen1] = useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
      const girlopen = ()=>{
        setOpen1(true)
      }
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleClose1 = () => {
        setOpen1(false);
      };
    
      const addmore = ()=>{
        setBoyadd((prevBoyadd)=> [...prevBoyadd , interestboy])
        setInterestboy('')
      }
      const addmore1 = ()=>{
        setGirladd((prevGirladd)=> [...prevGirladd , interestgirl])
        setInterestgirl('')
      }



      const match = () => {
        if (!boyname || !girlname || !boydob || !girldob || !boyadd || !girladd || !girlbond || !boybond) {
          toast.warning("Fill up the fields");
        } else {
      
          var matchCount = 0;
      
          for (var i = 0; i < boyadd.length; i++) {
            var boyData = boyadd[i];
      
            for (var j = 0; j < girladd.length; j++) {
              var girlData = girladd[j];
        
              if (boyData.toLowerCase === girlData.toLowerCase && boybond === girlbond) {
                // console.log(boyData)
                // console.log(girlData)
                matchCount++;
                break;
              }
            }
          }
      
          if (matchCount > 4) {
            setShowspin(true);
            toast.success("Hurrayyy!!!! You got a match 😍");
          } else if (matchCount > 1) {
            setShowspin(false);
            toast.success("30% Match...Add more interest to increase your chance 😋");
          } else {
            setShowspin(false);
            toast.error("Sorry for your loss 😭");
          }
        }
      };
      
      const retry = () => {
        setShowspin(false);
        setBoyDob('');
        setGirlDob('');
        setBoyadd([]);
        setGirladd([]);
        setBoyname('');
        setGirlname('');
      };
          
      // console.log("boy" + boyadd.length)
      // console.log("girl" + girladd.length )



      const [openmessage , setOpenmessage] = useState(false)


      const dialog = ()=>{
        setOpenmessage(true)
      }

      const closemess = ()=>{
        setOpenmessage(false)
      }
 

  return (
    <>
    <ToastContainer/>
    <Box sx={{backgroundColor:" #111927", backgroundImage:" radial-gradient(at 47% 33%, hsl(0.00, 71%, 60%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.18, 39%, 11%) 0, transparent 55%)" , height:"100%",minHeight:"100vh" , display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"1em" , padding:"0.5em 0.7em"}}>
     {
      showspin ? (
        <>
        <Hearts 
        height="350"
        width="350"
        color="  #e25252"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <Typography sx={{fontWeight:"700" , fontSize:"20px" , color:"#e25252" , textAlign:"center"}}>Match Again !!</Typography>
      <IconButton onClick={retry} ><ReplayIcon sx={{transform:"Scale(1.5)"}}/></IconButton>
      </>
      ):(
      <>
          <Box>
             <Link to='/' style={{textDecoration:"none"}}><Typography sx={{display:"flex" , justifyContent:"center"  ,alignItems:"center" , gap:"2px", color:"#000" ,fontWeight:"700" , fontSize:{sm:"20px" , xs:"15px"} }} className='body1'><KeyboardReturnIcon/> Back To Home</Typography></Link>  
        <Typography sx={{fontSize:{sm:"49px !important" , xs:"29px !important"} , fontWeight:"700" , opacity:"0.4" , color:"whitesmoke"}}   className='logo'>Let's Match the Vibe</Typography>
        </Box>
        <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"4em" , flexDirection:{md:"row" , xs:"column"}}}>
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
       
        <Box sx={{display:"flex" , flexDirection:"column" , gap:"1em" }}>
            <Box>
        <Typography sx={{alignSelf:"start" , fontWeight:"700" , color:"#d2d2d2"}} className='body1'>Full Name</Typography>
                    <input className='body1' type="text" name="name" id="boyname" placeholder='Enter your name' value={boyname} onChange={handleboynameChange} required style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%"}} />
                    </Box>
                    <Box>
                    <Typography sx={{alignSelf:"start" , fontWeight:"700",color:"#d2d2d2" }} className='body1'>DOB</Typography>
                    <input
                    className='body1'
            type="date"
            value={boydob}
            id='boydob'
            onChange={handleboyDateChange}
            min='2000-01-01'
            max='2020-01-01'
            style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%"}}
          />
          </Box>
          <Typography sx={{display:"flex" , alignItems:"center" , gap:"5px" , color:"white" , fontWeight:"700" , alignSelf:"center"}} className='body1'> <IconButton onClick={handleClickOpen}><DataSaverOnIcon sx={{color:"white"}}/></IconButton> Add Interest</Typography>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            backgroundColor: '#e25252',
     
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{color:"white"}}>
          {"Boy your Interest 🤔"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <input  onChange={(e)=> setInterestboy(e.target.value)} value={interestboy} type='text' className='form body1' style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%" , color:"white !important"}} />
           <Box sx={{display:"flex" , flexWrap:"wrap" , gap:"0.2em" , width:"15em" , justifyContent:"center"}}>
            {
  boyadd.map((interestboy, index) => (
    <Box sx={{background:"#f5f5f5" , border:"1px solid black"  , borderRadius:"8px" , marginTop:"1em" , display:"flex"  ,alignItems:"center" , gap:"0.2em"}}>
    <Typography sx={{textAlign:"center", fontWeight:"700" , paddingLeft:"0.3em"}} key={index}>{interestboy}</Typography>
    <IconButton
        onClick={() => {
          setBoyadd((prevBoyadd) =>
            prevBoyadd.filter((_, idx) => idx !== index)
          );
        }}
      ><CancelIcon sx={{color:"red"}}/></IconButton>
    </Box>
   
  ))
}
</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='body1' variant='outlined' sx={{borderColor:"#252525 !important" , color:"#fff" , fontWeight:"700" , textTransform:"none"}} onClick={handleClose}>Close</Button>
          <Button className='body1' onClick={addmore} variant='contained' sx={{background:"#252525 !important" ,color:"#fff" , fontWeight:"700" , textTransform:"none"}} >
            Add More
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{display:"flex" , flexWrap:"wrap" , gap:"0.2em" , width:"15em" , justifyContent:"center"}}>
            {
  boyadd.map((interestboy, index) => (
    <Box sx={{ background:"#f5f5f5" , border:"1px solid black"  , borderRadius:"8px"  , display:"flex"  ,alignItems:"center" , gap:"0.2em"}}>
    <Typography className='body1' sx={{textAlign:"center", fontWeight:"700" , paddingLeft:"0.3em"}} key={index}>{interestboy}</Typography>
    <IconButton
        onClick={() => {
          setBoyadd((prevBoyadd) =>
            prevBoyadd.filter((_, idx) => idx !== index)
          );
        }}
      ><CancelIcon sx={{color:"red"}}/></IconButton>
    </Box>
   
  ))
}
</Box>
          <Box sx={{alignSelf:"center"}} >
          <Select
          value={boybond}
          label="Bond"
          id='boybond'
          onChange={handlebondboyChange}
          sx={{ color: 'white', '& .MuiSelect-root': { borderColor: 'white !important' } }}
          className='select'
        >
          <MenuItem  className='body1' value={10}>Romantic Bond</MenuItem>
          <MenuItem className='body1' value={20}>Sexual Bond</MenuItem>
          <MenuItem className='body1' value={30}>Endure Bond</MenuItem>
        </Select>
          </Box>
        </Box>
      </Box>
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
        <input className='body1' type="file" style={{display:"none"}} ref={handleref1} onChange={handlechange1} />
        </Box>
        <Box sx={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Box>
        <Typography className='body1' sx={{alignSelf:"start" , fontWeight:"700" , color:"#d2d2d2"}} >Full Name</Typography>
                    <input className='body1' type="text" name="name" id="girlname" placeholder='Enter your name' value={girlname} onChange={handlegirlnameChange} required style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%"}} />
                    </Box>
                    <Box>
                    <Typography className='body1' sx={{alignSelf:"start" , fontWeight:"700" ,color:"#d2d2d2"}} >DOB</Typography>
                    <input
                    className='body1'
            type="date"
            value={girldob}
            id='girldob'
            onChange={handlegirlDateChange}
            min='2000-01-01'
            max='2020-01-01'
            style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%" }}
          />
          </Box>
          <Typography className='body1' sx={{display:"flex" , alignItems:"center" , gap:"5px" , color:"white" , fontWeight:"700" , alignSelf:"center"}}> <IconButton onClick={girlopen}><DataSaverOnIcon sx={{color:"white"}}/></IconButton> Add Interest</Typography>
          <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            backgroundColor: '#e25252',
     
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{color:"white"}}>
          {"Girl your Interest 🤔"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <input onChange={(e)=> setInterestgirl(e.target.value)} value={interestgirl} type='text' className='form body1' style={{border:"none" , background:"none" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , height:"3em" , width:"100%" , color:"white !important"}} />
           <Box sx={{display:"flex" , flexWrap:"wrap" , gap:"0.2em" , width:"15em" , justifyContent:"center"}}>
            {
  girladd.map((interestgirl, index1) => (
    <Box sx={{background:"#f5f5f5" , border:"1px solid black"  , borderRadius:"8px" , marginTop:"1em" , display:"flex"  ,alignItems:"center" , gap:"0.2em"}}>
    <Typography className='body1' sx={{textAlign:"center", fontWeight:"700" , paddingLeft:"0.3em"}} key={index1}>{interestgirl}</Typography>
    <IconButton
        onClick={() => {
          setGirladd((prevGirladd) =>
            prevGirladd.filter((_, idx) => idx !== index1)
          );
        }}
      ><CancelIcon sx={{color:"red"}}/></IconButton>
    </Box>
   
  ))
}
</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='body1' variant='outlined' sx={{borderColor:"#252525 !important" , color:"#fff" , fontWeight:"700" , textTransform:"none"}} onClick={handleClose1}>Close</Button>
          <Button className='body1' onClick={addmore1} variant='contained' sx={{background:"#252525 !important" ,color:"#fff" , fontWeight:"700" , textTransform:"none"}} >
            Add More
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{display:"flex" , flexWrap:"wrap" , gap:"0.2em" , width:"15em" , justifyContent:"center"}}>
            {
  girladd.map((interestgirl, index1) => (
    <Box sx={{background:"#f5f5f5" , border:"1px solid black"  , borderRadius:"8px"  , display:"flex"  ,alignItems:"center" , gap:"0.2em"}}>
    <Typography className='body1' sx={{textAlign:"center", fontWeight:"700" , paddingLeft:"0.3em"}} key={index1}>{interestgirl}</Typography>
    <IconButton
        onClick={() => {
          setGirladd((prevGirladd) =>
            prevGirladd.filter((_, idx) => idx !== index1)
          );
        }}
      ><CancelIcon sx={{color:"red"}}/></IconButton>
    </Box>
   
  ))
}
</Box>
          <Box sx={{alignSelf:"center"}} >
          <Select 
          value={girlbond}
          label="Bond"
          id='girlbond'
          onChange={handlebondgirlChange}
          sx={{ color: 'white', '& .MuiSelect-root': { borderColor: 'white !important' } }}
          className='select'
        >
          <MenuItem className='body1' value={10}>Romantic Bond</MenuItem>
          <MenuItem className='body1' value={20}>Sexual Bond</MenuItem>
          <MenuItem className='body1' value={30}>Endure Bond</MenuItem>
        </Select>
          </Box>
        </Box>
      </Box>
      </Box>
      <Box sx={{display:"flex" , gap:"0.5em" , alignItems:"center" , flexDirection:{sm:"row" , xs:"column"}}}>
      <Button className='body1' onClick={match} variant='contained' sx={{gap:"5px" , display:"flex" , borderRadius:"15px" , fontWeight:"700" , fontSize:"20px" , background:"#e25252 !important", textTransform:"none"}}><FavoriteIcon/> Let's Match</Button>
     </Box>
     <Box className="floating-button"  sx={{position:"sticky" , bottom:"0%" , left:"100%" , margin:"0 0.5em"}}><Fab onClick={dialog} className='body1' variant='contained' sx={{gap:"5px" , display:"flex" , borderRadius:"15px" , fontWeight:"700" , fontSize:"20px" , background:"#e25252 !important", opacity:{sm:"1" , xs:"0.7"}}}><ChatIcon sx={{color:"white"}}/></Fab></Box>
      <Dialog
      open={openmessage}
      onClose={closemess}
      PaperProps={{
        sx: {
          backgroundColor: 'black',
   
        },
      }}
      >
<DialogContent>
     <DialogContentText className='body1' sx={{fontSize:"18px" , fontWeight:"700" , color:"white"}}>
      Start a Chat by selecting the room
     </DialogContentText>
     <Box  sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop:"2em" , gap:"0.5em"}}>
   <Link to='/lovechat'> <Button variant='contained' className='body1' sx={{background:"#e25252 !important" , fontWeight:"700" , fontSize:"17px"}}>Love</Button></Link>
   <Link to='/friendchat'><Button variant='contained' className='body1' sx={{background:"#e25252 !important" , fontWeight:"700" , fontSize:"17px"}}>Friends</Button></Link> 
     </Box>
</DialogContent>
<DialogActions>
  <Button onClick={closemess} sx={{color:"#fff"}}>Close</Button>
</DialogActions>
      </Dialog>
      </>)
     }
 
    </Box>
    </>
  )
}
