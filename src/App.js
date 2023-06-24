
import './App.css';
import Login from './Components/Login';
import DrawerAppBar from './Components/Navbar';
import Sign from './Components/Sign';
import Match from './Components/Match';
import { Route, Routes } from 'react-router-dom';
import Chat from './Components/Chat';
import Error from './Components/Error';
import Lovechat from './Components/Lovechat';
function App() {
  return (
<Routes>
  <>
<Route exact path='/' element={<DrawerAppBar />}/>
<Route  exact path='/Login' element={<Login/>}/>
<Route  exact path='/Sign' element={<Sign/>}/>
<Route  exact path='/match' element={<Match/>}/>
<Route exact path='/friendchat' element={<Chat/>}/> 
<Route exact path='/error' element={<Error/>}/> 
<Route exact path='/lovechat' element={<Lovechat/>}/>
  </>
  </Routes>
  );
}

export default App;
