import React, {useState} from 'react'
import './Header.css'
import { BsHeart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function Header() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='Header'>
      <div className="Left-head">
        <a href="/"><img src="src\assets\holiday_village_FILL0_wght300_GRAD0_opsz48 3.png" alt="" />
        <img src="src\assets\UniLife.svg" alt="" />
        </a>
      </div>
      <div className="Right-head">
        <p className='Heart'><BsHeart/>&nbsp;&nbsp;&nbsp;Shortlist</p>
        <button onClick={()=>setIsOpen(true)} className='Mail'><AiOutlineMail/>&nbsp;&nbsp;&nbsp;Contact Us</button>
        <Modal
        isOpen={isOpen}
       onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
      >
        <div className="Modal-container">
        <div className='Top-moadl'>
        <h2>Contact Us</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
          <path d="M11.917 78.8337C11.1225 78.8337 10.4656 78.5739 9.94616 78.0545C9.42671 77.535 9.16699 76.8781 9.16699 76.0837V51.0587C9.16699 50.2642 9.42671 49.592 9.94616 49.042C10.4656 48.492 11.1225 48.217 11.917 48.217H24.2003V28.692C24.2003 23.192 26.1253 18.5628 29.9753 14.8045C33.8253 11.0462 38.5003 9.16699 44.0003 9.16699H59.5837C64.9003 9.16699 69.4378 11.0767 73.1962 14.8962C76.9545 18.7156 78.8337 23.3142 78.8337 28.692V76.7253C78.8337 77.3364 78.635 77.8406 78.2378 78.2378C77.8406 78.635 77.3364 78.8337 76.7253 78.8337C76.1142 78.8337 75.6253 78.635 75.2587 78.2378C74.892 77.8406 74.7087 77.3364 74.7087 76.7253V68.1087H55.917V76.0837C55.917 76.8781 55.5962 77.535 54.9545 78.0545C54.3128 78.5739 53.5337 78.8337 52.617 78.8337H11.917ZM55.917 63.9837H74.7087V28.692C74.7087 24.4142 73.2267 20.7781 70.2628 17.7837C67.2989 14.7892 63.7392 13.292 59.5837 13.292H44.0003C39.6614 13.292 35.9795 14.7739 32.9545 17.7378C29.9295 20.7017 28.417 24.3531 28.417 28.692V48.217H52.617C53.5337 48.217 54.3128 48.4767 54.9545 48.9962C55.5962 49.5156 55.917 50.2031 55.917 51.0587V63.9837ZM39.692 34.742C39.0809 34.742 38.5767 34.5434 38.1795 34.1462C37.7823 33.7489 37.5837 33.2448 37.5837 32.6337C37.5837 32.0837 37.7823 31.5948 38.1795 31.167C38.5767 30.7392 39.0809 30.5253 39.692 30.5253H63.4337C63.9837 30.5253 64.4573 30.7392 64.8545 31.167C65.2517 31.5948 65.4503 32.0837 65.4503 32.6337C65.4503 33.2448 65.2517 33.7489 64.8545 34.1462C64.4573 34.5434 63.9837 34.742 63.4337 34.742H39.692ZM31.992 63.067C32.1142 63.1892 32.2823 63.2503 32.4962 63.2503C32.71 63.2503 32.9087 63.1892 33.092 63.067L51.7003 52.4337H13.292L31.992 63.067ZM13.292 74.7087H51.7003V56.467L35.2003 65.9087C34.7725 66.1531 34.3448 66.3364 33.917 66.4587C33.4892 66.5809 33.0309 66.642 32.542 66.642C32.0531 66.642 31.5948 66.5809 31.167 66.4587C30.7392 66.3364 30.3114 66.1531 29.8837 65.9087L13.292 56.467V74.7087ZM13.292 52.4337V57.017V56.467V74.7087V56.467V57.017V53.9003C13.292 53.5948 13.292 53.5948 13.292 53.9003V52.4337Z" fill="#3A5295"/>
        </svg>
        </div>
        <p>Feel free to contact us if you have any questions.
Looking forward to hear from you.</p>
        <p>Name</p>
        <input type="text" placeholder='Enter Your Name'/>
        <p>Phone Number</p>
        <input type="text" placeholder='Enter Your Phone Number'/>
        <p>You are a...</p>
        <select name="pronouns" id="">
          <option value="Student">Student</option>
          <option value="Politician">Politician</option>
          <option value="Donkey">Donkey</option>
          <option value="Sleepy">Sleep deprived developer</option>
        </select>
        <p>Email</p>
        <input type="text" placeholder='Enter Your Email Address'/>
        <p>Message</p>
        <input type="text" placeholder='Enter Your Message'/>
        </div>
      </Modal>
      </div>
    </div>
  )
}

export default Header