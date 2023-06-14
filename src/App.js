
import './App.css';
import Login from './Components/Login';
import DrawerAppBar from './Components/Navbar';
import Sign from './Components/Sign';
import Match from './Components/Match';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
<Routes>
  <>
<Route exact path='/' element={<DrawerAppBar />}/>
<Route  exact path='/Login' element={<Login/>}/>
<Route  exact path='/Sign' element={<Sign/>}/>
<Route  exact path='/match' element={<Match/>}/>
  </>
  </Routes>
  );
}

export default App;
