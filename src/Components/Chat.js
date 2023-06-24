import React, { useState, useEffect, useContext } from 'react';
import { Button, Box, Typography , Card , CardContent , Avatar , Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { Appcontext } from '../Context/AppContext';
import SendIcon from '@mui/icons-material/Send';
import Error from './Error';
export default function Chat() {
  const [messages, setMessages] = useState([]);
//   const scroll = useRef();
  const {user} = useContext(Appcontext)
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      toast.error('Enter a valid message');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('');
    // scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <>
    <ToastContainer />
    {user ? (
        <Box sx={{ backgroundColor: '#111927',
        backgroundImage:
          'radial-gradient(at 47% 33%, hsl(0.00, 71%, 60%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.18, 39%, 11%) 0, transparent 55%)', height: '100%',
          minHeight:"100vh",}}>
             <Box className="floating-button"  sx={{position:"sticky" , bottom:"0%" , left:"100%" , margin:"0 0.5em",}}> <Link to='/' style={{textDecoration:"none"}}><Fab className='body1' variant='contained' sx={{gap:"5px" , display:"flex" , borderRadius:"15px" , fontWeight:"700" , fontSize:"20px" , background:"#e25252 !important", opacity:{sm:"1" , xs:"0.7"}}}><OtherHousesIcon sx={{color:"white"}}/></Fab></Link> </Box>
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
            width: '45em',
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
              height: 'auto',
              display: 'flex',
              justifyContent: 'center',
              backdropFilter: 'blur(16px) saturate(180%)',
              background: 'rgba(0, 0, 0, 0.50)',
              padding:"2em 0"
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
                <Typography className='body1' sx={{ color: 'white', fontSize: '18px' }}>
                  {user.displayName}
                </Typography>
              </Box>
              <Typography
                className='logo'
                sx={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: { sm: '29px !important', xs: '23px !important' },
                  whiteSpace: 'nowrap',
                }}
              >
                Chat with your Loved one
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
            {messages &&
              messages.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:
                      message.uid === auth.currentUser.uid ? 'flex-end !important' : 'flex-start !important',
                    width: '100%',
                  }}
                >
                  <Typography
                    className='body1'
                    sx={{ alignSelf: 'center !important', margin: '0.5em 0' }}
                  >
                    {message.timestamp && message.timestamp.toDate().toLocaleTimeString()}
                  </Typography>
                  <Typography className='body1' sx={{ margin: '0 0.5em' }}>
                    {message.name}
                  </Typography>
                  <Typography
                    sx={{
                      background: message.uid === auth.currentUser.uid ? '#e25252' : 'grey',
                      color: 'white',
                      padding: '10px',
                      borderRadius:
                        message.uid === auth.currentUser.uid
                          ? '10px 7px 0 10px'
                          : '10px 7px 10px 0',
                      margin: '0 0.5em',
                    }}
                    className='body1'
                  >
                    {message.text}
                  </Typography>
                </Box>
              ))}
          </Box>
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' , height:"4em" }}>
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
        <Error/>
      )}
  </>
);
      }