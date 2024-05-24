import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>get exclusive offers</h1>
      <p>Subscribe to our newsletter and get 20% off your first purchase</p>
      <div>
        <input type="email" placeholder='Your email ID' />
        <button>Suscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
