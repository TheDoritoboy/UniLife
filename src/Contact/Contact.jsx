import React from 'react'
import './Contact.css'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
//BsFacebook
//AiFillTwitterCircle
//BsInstagram
function Contact() {
  return (
    <div className='Contact'>
      <div>
        <p className='Contact-text Touch'>Keep in Touch</p>
        <p className='Contact-text'>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
        <input type="text" placeholder='  Your email'/>
      </div>
      <div>
        <p className='Contact-text Touch'>Let's Socialize</p>
        <p className='Contact-text'><BsFacebook/> FaceBook</p>
        <p className='Contact-text'><AiFillTwitterCircle/> Twitter</p>
        <p className='Contact-text'><BsInstagram/> Instagram</p>
      </div>
    </div>
  )
}

export default Contact