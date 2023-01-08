import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
let arr=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]



return (
  <div className='gallery d-flex'>
    <div className="gallery-content">
    <SubHeading title="Instagram" />
    <h1 style={{color:"#DCCa87" , fontSize:"4.4vw"}} className="text-heading">Photo Gallery</h1>
        <p className="text" style={{ color: '#AAAAAA', marginTop: '2vw' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className="btn">View More</button>
    </div>

    <div className="gallery-images">
    <div className="gallery-images_container" ref={scrollRef}>
          {arr.map((image, index) => (
            <div className="gallery-images_card d-flex" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll('right')} />
        </div>
    </div>
    


  </div>
)}

export default Gallery;




