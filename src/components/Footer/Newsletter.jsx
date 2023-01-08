import React from 'react'
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

function Newsletter() {
  return (
    <div className="newsletter">
    <div className="newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 style={{color:"#dcca87", fontSize:"4vw"}} className="heading-text">Subscribe To Our Newsletter</h1>
      <p id='text' className="text">And never miss latest Updates!</p>
    </div>
    <div className="newsletter-input d-flex">
      <input type="email" placeholder="Enter your email address" />
      <button className="btn">Subscribe</button>
    </div>
  </div>
  )
}

export default Newsletter
