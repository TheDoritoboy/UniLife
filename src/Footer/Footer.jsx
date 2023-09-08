import React from 'react'
import './Footer.css'
import { AiOutlineCopyright } from 'react-icons/ai';
function Footer() {
  return (
    <div className='footer'>
      <div className='Left-foot'>
          <p className='Foot-text'>About Us</p>
          <p className='Foot-text'>Terms & Conditions</p>
          <p className='Foot-text'>Privacy & Cookie Policies</p>
      </div>
      <div className='Right-foot'>
          <p className='Foot-text'> 2023 </p>
          <p className='Foot-text'><AiOutlineCopyright/> <a className='Foot-text' href='/'>UniLife</a></p>
      </div>
    </div>
  )
}

export default Footer