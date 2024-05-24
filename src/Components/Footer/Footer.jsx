import React from 'react'
import './Footer.css'
import Footer_Logo from '../../assets/logo_big.png'
import InstagramIcon from '../../assets/instagram_icon.png'
import PinterestIcon from '../../assets/pintester_icon.png'
import WhatasappIcon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={Footer_Logo} alt="Imagenfooter" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={InstagramIcon} alt="instagramIcon" />
        </div>
        <div className="footer-icons-container">
            <img src={PinterestIcon} alt="instagramIcon" />
        </div>
        <div className="footer-icons-container">
            <img src={WhatasappIcon} alt="instagramIcon" />
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
