import React from 'react'
import './Footer.css'
import Footer_Logo from '../../assets/Ferremas_logo.png'
import InstagramIcon from '../../assets/instagram_icon.png'
import PinterestIcon from '../../assets/pintester_icon.png'
import WhatasappIcon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={Footer_Logo} alt="Imagenfooter" />
        <p>FerreMas</p>
      </div>
      <ul className="footer-links">
        <li>Inicio</li>
        <li>Tienda</li>
        <li>Hombres</li>
        <li>Mujeres</li>
        <li>Niños</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={InstagramIcon} alt="instagramIcon" /></a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={PinterestIcon} alt="instagramIcon" /></a>
        </div>
        <div className="footer-icons-container">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={WhatasappIcon} alt="instagramIcon" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - to lo deresho reservau puñeta </p>
      </div>
    </div>
  )
}

export default Footer
