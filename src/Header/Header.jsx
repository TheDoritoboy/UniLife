import React from 'react'
import { BsHeart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
function Header() {
  return (
    <div className='Header'>
        {/*<img src="..\assets\holiday_village_FILL0_wght300_GRAD0_opsz48 3.png" alt="" />
        <img src="..\assets\UniLife.svg" alt="" />*/}
        <p><BsHeart/> Shortlist</p>
        <p><AiOutlineMail/> Contact Us</p>
    </div>
  )
}

export default Header