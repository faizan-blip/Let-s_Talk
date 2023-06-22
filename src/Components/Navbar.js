import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './Images/logo.png'
import Landing from './Landing';
import About from './About';
import Feature from './Feature';
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Features'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [login , setLogin] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleDrawerToggle();
    }
  };
  useEffect(()=>{
       if(login){
        setLogin(true)
       }
       else{
        setLogin(false)
       }
   
 },[login])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{display:"flex" , alignItems:"center !important" , justifyContent:"center !important"}} >
          <img src={logo} alt="" width={50} />
          <Typography
            className='logo'
          >
           Lets Talk
          </Typography>
          </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding className='body'>
            <ListItemButton sx={{ textAlign: 'center' }}  >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:"#16171f" }}>
        <Toolbar  sx={{ display: 'flex', justifyContent: 'space-between !important' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            className='but'
          >
            <Box sx={{display:"flex" ,alignItems:"center"}}>
            <MenuIcon   />
            <img src={logo} alt="" width={50} />
          <Typography
            component="div"
            sx={{ flexGrow: 1}}
            className='logo'
          >
           Lets Talk
          </Typography>
            </Box>
          </IconButton>
          <Box sx={{display:"flex" , alignItems:"center"}} className='nav'>
          <img src={logo} alt="" width={50} />
          <Typography
            component="div"
            sx={{ flexGrow: 1}}
            className='logo'
          >
           Lets Talk
          </Typography>
          </Box>
          <Box sx={{display:"flex" , alignItems:"center"}}>
          <Box className='nav' sx={{marginRight:{md:"0 8em" , xs:"0em"}}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' , padding:{md:"0 1.4em" , xs:"0 0.8em"} , textTransform:"none" }} className='body'  onClick={() => handleScrollToSection(item.toLowerCase())}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{display:"flex" , gap:"20px"}}>
          {
        !login && 
      <Link to='/Sign' ><Button variant="outlined" sx={{borderColor:"#2f313a" , color:"#fff"}} className='hover'>Sign-up</Button></Link>   
     
           }
            {
        !login &&
        <Link to='/Login'><Button variant='contained' sx={{background:"#fff" , color:"#2f313a"}} className='hover1'>Log-in</Button></Link>  
      }
      {
        login &&
        <Link to='/'><Button variant='contained' sx={{background:"#fff" , color:"#2f313a"}} className='hover1' >Log-out</Button></Link>  
      }
        
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , background:"#16171f" , color:"white"},
          }}
          className='body'
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width:"100%" }} >
        <Toolbar />
        <Landing />
        <About id='about' />
        <Feature id='features' />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;