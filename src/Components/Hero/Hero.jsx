import React from 'react';
import './Hero.css';
import wrenchLogo from '../../assets/wrench.png';
import constructor from '../../assets/Constructo.png';
import arrow_icon from '../../assets/arrow.png';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="HeroLeft">
        <h2>¡Articulos nuevos!</h2>
        <div>
          <div className="Hero-hand-icon">
            <p>Ferremas</p>
            <img src={wrenchLogo} alt="" />
          </div>
          <p>Herrmientas para </p>
          <p>todos</p>
        </div>
        <div className="Hero-latest-btn">
            <div>Precios bajos</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="HeroRight">
        <img src={constructor} alt="" />
      </div>
    </div>
  )
}

export default Hero
