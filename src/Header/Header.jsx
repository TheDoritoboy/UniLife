import React from 'react'
import './Header.css'
import { BsHeart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
function Header() {
  return (
    <div className='Header'>
      <div className="Left-head">
        <a href="/"><img src="src\assets\holiday_village_FILL0_wght300_GRAD0_opsz48 3.png" alt="" />
        <img src="src\assets\UniLife.svg" alt="" />
        </a>
      </div>
      <div className="Right-head">
        <p className='Heart'><BsHeart/>&nbsp;&nbsp;&nbsp;Shortlist</p>
        <p className='Mail'><AiOutlineMail/>&nbsp;&nbsp;&nbsp;Contact Us</p>
      </div>
    </div>
  )
}

export default Header