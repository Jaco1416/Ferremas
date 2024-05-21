import styled from 'styled-components';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import  Home  from './Pages/Home';
import  Profile  from './Pages/Profile';
import  Shop  from './Pages/Shop';
import  Product  from './Pages/Product';
import  Cart  from './Pages/Cart';
import  Login  from './Pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='product' element={<Product/>}>
            <Route path=':productid' element={<Product/>}/>
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
