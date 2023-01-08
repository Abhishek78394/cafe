import React from 'react';
import { data, images } from '../../constants';
import {SubHeading,MenuItem} from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='menu '>
    <div className="menu-title ">
      <SubHeading  title="Menu That Fits Your Palatte"  />
      <h1 id='menu-h1' className="heading-text">Today's Special</h1>
    </div>

    <div className="specialMenu-menu">
      <div className="specialMenu-menu_wine  flex__center">
        <p className="specialMenu-menu_heading">Wine & Beer</p>
        <div className="specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="specialMenu-menu_cocktails  flex__center">
        <p className="specialMenu-menu_heading">Cocktails</p>
        <div className="specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>


      <button className="btn">View More</button>
  



  </div>
);

export default SpecialMenu;
