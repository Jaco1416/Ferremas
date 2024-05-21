import React, { useState }from "react";
import logo from "../../assets/Ferremas_logo.png";
import cart_icon from "../../assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";



export function Navbar() {
  //Usestate para pagina saber en que pagina estas
    const [pagina, setPagina] = useState("Inicio");

  //fin usestate


  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="FerremasLogo"></img>
        <p>FerreMas</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setPagina("Home")}}><Link style={{ textDecoration: 'none' }} to='/'>Inicio</Link>{pagina==="Home"?<hr/>:<></>}</li>  
        <li onClick={()=> {setPagina("Profile")}}><Link style={{ textDecoration: 'none' }} to='/Profile'>Perfil</Link>{pagina==="Profile"?<hr/>:<></>}</li>
        <li onClick={()=> {setPagina("Shop")}}><Link style={{ textDecoration: 'none' }} to='/Shop'>Tienda</Link>{pagina==="Shop"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/Cart'><img src={cart_icon} alt="CartIcon"></img></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

