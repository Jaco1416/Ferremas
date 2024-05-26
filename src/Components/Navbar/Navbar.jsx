import React, { useState, useContext }from "react";
import logo from "../../assets/Ferremas_logo.png";
import cart_icon from "../../assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';



export function Navbar() {
  //Usestate para pagina saber en que pagina estas
    const [pagina, setPagina] = useState("Inicio");
    const {getTotalCartItems} = useContext(ShopContext); 

  //fin usestate


  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="FerremasLogo"></img>
        <Link onClick={()=> {setPagina("Home")}} style={{ textDecoration: 'none', color:`white` }} to='/'><p>FerreMas</p></Link>
      </div>
      <ul className="nav-menu">  
        <li onClick={()=> {setPagina("Profile")}}><Link style={{ textDecoration: 'none', color:`white` }} to='/Profile'>Perfil</Link>{pagina==="Profile"?<hr/>:<></>}</li>
        <li onClick={()=> {setPagina("Shop")}}><Link style={{ textDecoration: 'none', color:`white` }} to='/Shop'>Tienda</Link>{pagina==="Shop"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/Cart'><img src={cart_icon} alt="CartIcon"></img></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

