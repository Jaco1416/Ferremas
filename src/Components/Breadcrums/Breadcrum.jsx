import React from 'react'
import './Breadcrum.css'
import arrowIcon from '../../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      Inicio  <img src={arrowIcon} alt="" /> Tienda <img src={arrowIcon} alt="" /> {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
