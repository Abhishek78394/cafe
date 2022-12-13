import React from 'react';
import './Header.css';
import images from '../../constants/images'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='header'> 
      <div className="header-left">
        <SubHeading title="Chase The New Flavour"/>
        <h1 className='header-h1'>The Key To Fine Dining</h1>
        <p className='text'>
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
        </p>
        <button className='btn'>Explore More</button>
      </div>
      <div className="header-right">
        <img src={images.welcome} alt="welcome image" />
      </div>
  </div>
);

export default Header;
