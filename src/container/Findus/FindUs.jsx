import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => {
  return(
  <div className="app-bg app-wrapper findus" id="contact">
    <div className="findus-info">
      <SubHeading title="Contact" />
      <h1 className="text-heading" style={{ marginBottom: '3vw', color:"#DCCA87", fontSize:"5vw",fontWeight:"400" }}>Find Us</h1>
      <div className="findus-content">
        <p className="text">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="text-heading" style={{ color: '#DCCA87', margin: '2vw 0',fontSize:"1.4vw" }}>Opening Hours</p>
        <p  id='text' className="text">Mon - Fri: 10:00 am - 02:00 am</p>
        <p id='text' className="text">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="btn" style={{ marginTop: '2vw' }}>Visit Us</button>
    </div>

    <div className="findus-img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
)}

export default FindUs;
