import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="menuitem-head">
      <div className="menuitem-name">
        <p id="text" style={{margin:"1px"}} className="text" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="menuitem-dash" />
      <div className="menuitem-price">
        <p id='text' className="text">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p id='text' className="text" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
