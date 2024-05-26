import React from 'react'
import './Offers.css'
import exclusive_img from '../../assets/exclusive_image.png'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'> 
      <div className="offers-left">
        <h1>Materiales y</h1>
        <h1>Herramientas</h1>
        <p>¡Todo aqui en FerreMas!</p>
        <button><Link to='/Shop' style={{ textDecoration: 'none', color:`white` }}>Ir a comprar</Link></button>
      </div>  
      <div className="offers-right">
        <img src={exclusive_img} alt="img-ofertas" />
      </div>
    </div>
  )
}

export default Offers
