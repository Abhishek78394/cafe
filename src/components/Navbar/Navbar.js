import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className='navbar-link'>
        <li className='list-item'><a href="#home">Home </a></li>
        <li className='list-item'><a href="#about">About</a></li>
        <li className='list-item'><a href="#menu">Menu</a></li>
        <li className='list-item'><a href="#awards">Awards</a></li>
        <li className='list-item'><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a className='list-item' href="#login">Log In / Register</a>
        <div className='h-line'></div>
        <a className='list-item' href="/">Book Table</a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu className='menu' onClick={() => { setToggleMenu(true) }} />
        {toggleMenu && (
          <div className="navbar-smallscreen-menu">
            <MdOutlineRestaurantMenu className='cross' onClick={() => { setToggleMenu(false) }} />
            <ul className='navbar-link'>
              <li className='list-item'><a href="#home">Home 
                 <div id='line1' className="line"> </div>
                 <div className="line" id='line2'></div>
               </a></li>
              <li className='list-item'><a href="#about">About
                <div id='line1' className="line"></div>
                <div className="line" id='line2'></div> 
               </a></li>
              <li className='list-item'><a href="#menu">Menu 
                <div id='line1' className="line"></div>
                <div className="line" id='line2'></div> </a></li>
              <li className='list-item'><a href="#awards">Awards
                <div id='line1' className="line"></div>
                <div className="line" id='line2'></div> </a></li>
              <li className='list-item'><a href="#contact">Contact
                <div id='line1' className="line"></div>
                <div className="line" id='line2'></div> </a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
