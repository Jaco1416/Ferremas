import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import  Footer  from './Components/Footer/Footer';
import  Home  from './Pages/Home';
import  Profile  from './Pages/Profile';
import  Shop  from './Pages/Shop';
import  Product  from './Pages/Product';
import  Cart  from './Pages/Cart';
import  Login  from './Pages/Login';
import Registro  from './Pages/Registro';
import Pagos  from './Pages/Pagos';
import Contacto  from './Pages/Contacto';
import Transferencia  from './Pages/Transferencia';
import Confirmar  from './Pages/Confirmar';
import  Midbar  from './Components/Midbar/Midbar';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import ShopCategory from './Pages/ShopCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Indicadores from './Indicadores';


function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar/>
        <Midbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='product' element={<Product/>}>
            <Route path=':productid' element={<Product/>}/>
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Registro' element={<Registro/>}/>
          <Route path='/Pagos' element={<Pagos/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/Transferencia' element={<Transferencia/>}/>
          <Route path='/Confirmar' element={<Confirmar/>}/>
        </Routes>
        <Indicadores/>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
