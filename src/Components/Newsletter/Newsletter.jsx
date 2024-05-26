import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>DESCUENTOS POR CODIGO</h1>
      <p>Escribe tu codigo de descuentos</p>
      <div>
        <input type="text" placeholder='Tu codigo de promocion' />
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Newsletter
