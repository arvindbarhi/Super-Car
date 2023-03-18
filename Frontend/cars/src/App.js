import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Login from './Component/Login'
import Reg from './Component/Reg'
import Contactus from './Component/Contactus'
import Adminlogin from './Component/Adminlogin'
import Userafterlogin from './Component/Userafterlogin';
import Logout from './Component/Logout';

function App() {
  return (
    <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userreg' element={<Reg />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/adminlog' element={<Adminlogin />} />
          <Route path='/userafterlogin' element={<Userafterlogin />} />
          <Route path='/userlogout' element={<Logout />} />
          
          
          <Route path='' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
