import React from 'react';
import { Button } from 'react-bootstrap';
import './story.scss';

export default function Story() {
  return (
    <div className='story-main-box mb-3'>
      <div className="tex-box">
      <h1>Never miss a story!</h1>
      <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
      <div className="input-box mb-1">
        <input type="text" placeholder='Enter your email address' />
        <Button className='button-react ms-3'>Subscribe</Button>
      </div>
        <span>By subscribing you agree to our <a href="#">Privacy Policy</a></span>
      </div>
    </div>
  )
}
