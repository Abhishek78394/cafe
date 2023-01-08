import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="laurels-awards-card">
    <img style={{width:"4vw"}} src={imgUrl} alt="awards" />
    <div className="card-content">
      <p className="text-heading" style={{ color: '#DCCA87', fontSize:"1.2vw" }}>{title}</p>
      <p className="text">{subtitle}</p>
    </div>
  </div>

);

console.log(data.awards)
const Laurels = () => (
  <div className="app-bg app-wrapper laurel" id="awards">
    <div className="laurel-left">
      <SubHeading title="Awards & recognition" />
      <h1 style={{fontSize:"4.2vw",color: "#DCCA87"}} className="text-heading">Our Laurels</h1>

      <div className="laurels-awards ">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
      
    </div>

    <div className="laurel-img">
      <img src={images.laurels} alt="laurels_img" />
    </div>

  </div>
);

export default Laurels;
