import React from 'react';
import{ images } from '../../constants';

const SubHeading = (props) => (
  <div style={{marginBottom :"1rem"}}>
      <p className='sub-title'>{props.title}</p>
<img src={images.spoon}alt="spoon" className='sub-img'/>
  </div>
);

export default SubHeading;
