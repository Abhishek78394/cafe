import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app-bg app-wrapper app-chef">
    <div className="chef-img ">
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className="chef-right">
    <SubHeading title="Chef's word" />
      <h1 className="heading-text">What we believe in</h1>
      <div className="chef-content">
        <div className="chef-content-P">
          <img src={images.quote} alt="quote_image"/>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p id='text' className="text"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>
      <div className="chef-sign">
        <p>Kevin Luo</p>
        <p id='text' className="text">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>


   
  </div>
);

export default Chef;
