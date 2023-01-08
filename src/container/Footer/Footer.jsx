import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';



function Footer() {
  return (
    <div className='footer'>
      <FooterOverlay />
    <Newsletter />

    <div className="footer-links">
      <div className="footer-links-contact">
        <h1 style={{color:"#DCCA87" , margin:"1vw 0 1vw 0"}} className="app__footer-headtext">Contact Us</h1>
        <p id='text' className="text">9 W 53rd St, New York, NY 10019, USA</p>
        <p id='text' className="text">+1 212-344-1230</p>
        <p id='text' className="text">+1 212-555-1230</p>
      </div>

      <div className="footer-links-logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="text">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="footer-links-icons">
          <FiFacebook />--
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer-links-work">
        <h1 style={{color:"#DCCA87"}} className="footer-headtext">Working Hours</h1>
        <p id='text' className="text">Monday-Friday:</p>
        <p id='text' className="text">08:00 am - 12:00 am</p>
        <p id='text' className="text">Saturday-Sunday:</p>
        <p id='text' className="text">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer-copyright">
      <p className="text">2021 Gericht. All Rights reserved.</p>
    </div>




    </div>
  );
}

export default Footer;

