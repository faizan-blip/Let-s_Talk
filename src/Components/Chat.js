import React, { useContext } from 'react';
import { Button, Box, Typography , Card , CardContent , Avatar , Fab } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';
import couple from './Images/couple.png'
import { useNavigate } from 'react-router-dom';
import { auth,} from './Firebase';
import { ToastContainer} from 'react-toastify';
import { Appcontext } from '../Context/AppContext';
import SendIcon from '@mui/icons-material/Send';
export default function Chat() {
   const Nav = useNavigate()
  const {user , friendmessages , setInput , input , sendMessage} = useContext(Appcontext)

    const goto = ()=>{
      Nav('/match')
    }
  return (
  <>
    <ToastContainer />
    {user ? (
        <Box sx={{  backgroundColor: '#111927',
        backgroundImage:
          'radial-gradient(at 47% 33%, hsl(0.00, 71%, 60%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.18, 39%, 11%) 0, transparent 55%)', height: '100%',
          minHeight:"100vh"}}>
            <Box className="floating-button"  sx={{position:"sticky" , bottom:"0%" , left:"100%" }}><Fab onClick={goto} className='body1' variant='contained' sx={{gap:"5px" , display:"flex" , borderRadius:"15px" , fontWeight:"700" , fontSize:"20px" , background:"#e25252 !important", opacity:{sm:"1" , xs:"0.7"}}}> <img src={couple} alt="" width={40}  /></Fab></Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1em 1em',
        overflow:"hidden",
      }}
    >
   
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: {sm:"45em" , xs:"100%"},
            height: '40em',
            alignItems: 'center',
            justifyContent: 'space-between',
            backdropFilter: 'blur(16px) saturate(180%)',
            background: 'rgba(0, 0, 0, 0.50)',
          }}
        >
          <Card
            sx={{
              width: '100%',
              borderRadius: '0 0 17px 17px',
              display: 'flex',
              minHeight:"8em",
              height:"auto",
              justifyContent: 'center',
              backdropFilter: 'blur(16px) saturate(180%)',
              background: 'rgba(0, 0, 0, 0.50)',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                flexDirection: 'column-reverse',
              }}
            >
              <Box sx={{ display: 'flex', gap: '0.2em', alignItems: 'center' }}>
                <Avatar />
                <Typography className='body1' sx={{ color: '#fff', fontSize:{sm:"18px" , xs:"17px"} }}>
                  {user.displayName}
                </Typography>
              </Box>
              <Typography
                className='logo'
                sx={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: { sm: '29px !important', xs: '20px !important' },
                  whiteSpace: 'nowrap',
                }}
              >
                Chat with your Friend one's
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            //   justifyContent: 'flex-end',/
              flexGrow: 1,
              overflowY: 'auto',
              width:"100%",
              marginBottom:"1em"
            }}
            className='over'
          >
            {friendmessages &&
              friendmessages.map((friendmessage) => (
                <Box
                  key={friendmessage.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:
                      friendmessage.uid === auth.currentUser.uid ? 'flex-end !important' : 'flex-start !important',
                    width: '100%',
                  }}
                >
                  <Typography
                    className='body1'
                    sx={{ alignSelf: 'center !important', margin: '0.5em 0' }}
                  >
                    {friendmessage.timestamp && friendmessage.timestamp.toDate().toLocaleTimeString()}
                  </Typography>
                  <Typography className='body1' sx={{ margin: '0 0.5em' , color:"#d2d2d2" , opacity:"0.7" }}>
                    {friendmessage.name}
                  </Typography>
                  <Typography
                    sx={{
                      background: friendmessage.uid === auth.currentUser.uid ? '#e25252' : 'grey',
                      color: 'white',
                      padding: '10px',
                      borderRadius:
                      friendmessage.uid === auth.currentUser.uid
                          ? '10px 7px 0 10px'
                          : '10px 7px 10px 0',
                      margin: '0 0.5em',
                    }}
                    className='body1'
                  >
                    {friendmessage.text}
                  </Typography>
                </Box>
              ))}
          </Box>
          <Box sx={{ display: 'flex', width:"100%", alignItems: 'center' , minHeight:{sm:"4em", xs:"3.5em"} }}>
            <input
              className='body1 login form'
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type='text'
              placeholder='Message'
              style={{
                width: '85%',
                background: 'white',
                height:"100%",
                border: 'none',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            />
            <Button
              className='body1'
              variant='contained'
              onClick={sendMessage}
              sx={{ width: '15%', background: '#e25252 !important',height:"100%" , borderRadius:"0 10px 10px 0" }}
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
        </Box> 
      </Box>
      ) : (
        <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" , background:"#000"}}>
        <InfinitySpin 
        width='200'
        color="#e25252"
      />
      </Box>
      )}
  </>
);
      }