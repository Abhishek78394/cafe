import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='about app-bg'>
    <div className="about-bg d-flex">
      <img src={images.G} alt="g images" />
    </div>
    <div className="about-content d-flex">
      <div className="about-left">
        <h1 id='h1' className='heading-text '>About Us</h1>
        <img src={images.spoon} alt="spoon img" />
        <p id='p' className='text'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. 
              Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed 
                 Odio Nec Aliquet Eu Proin Mauris Et.</p>
        <button className='btn'> Know More</button>
      </div>
      <div className="about-center">
        <img src={images.knife} alt="knife images" />
      </div>
      <div className="about-right">

        <h1 id='h1' className="heading-text">Our History</h1>
        <img src={images.spoon} alt="spoon img" />
        <p  className='text'> Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu 
            Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In 
               Sed Odio Nec Aliquet. </p>
        <button className='btn'> Know More</button>

      </div>
    </div>

  </div>
);

export default AboutUs;
