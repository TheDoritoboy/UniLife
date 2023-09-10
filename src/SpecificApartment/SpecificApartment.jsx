import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './SpecificApartment.css'
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
function SpecificApartment() {
    const [isOpen, setIsOpen] = useState(false)
    const { aptId } = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      axios
        .get(`https://unilife-server.herokuapp.com/properties/${aptId}`)
        .then((res) => {
          console.log(res.data);
          setDetails(res.data);
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); // Set loading to false on error
        });
  
      console.log('get item info', aptId);
    }, [aptId]);
  
    // Check if loading
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Check if details is empty
    if (!details) {
      return <div>Details not found</div>;
    }
  
    // Check if address is defined
    const address = details.address || {};
    
    let bedroomPricesArray = [];

    const keyFeaturesList = (details.key_features || []).map((feature) => (
        <p className='Feature-list' key={feature}>              
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12.6 23.3999C12.4666 23.3999 12.3444 23.3776 12.2333 23.3332C12.1222 23.2888 12.0111 23.211 11.9 23.0999L5.86665 17.0665C5.66665 16.8665 5.56665 16.6221 5.56665 16.3332C5.56665 16.0443 5.66665 15.7999 5.86665 15.5999C6.06665 15.3999 6.29998 15.2999 6.56665 15.2999C6.83332 15.2999 7.06665 15.3999 7.26665 15.5999L12.6 20.9332L24.7 8.8332C24.9 8.6332 25.1389 8.5332 25.4166 8.5332C25.6944 8.5332 25.9333 8.6332 26.1333 8.8332C26.3333 9.0332 26.4333 9.27209 26.4333 9.54987C26.4333 9.82765 26.3333 10.0665 26.1333 10.2665L13.3 23.0999C13.1889 23.211 13.0778 23.2888 12.9667 23.3332C12.8555 23.3776 12.7333 23.3999 12.6 23.3999Z" fill="#3A5295"/>
            </svg>{feature}
        </p>
      ));

    if (details.bedroom_prices) {
      bedroomPricesArray = Object.entries(details.bedroom_prices);
    }
  return (
    <div>
        <a href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M0.250103 6.0001C0.250103 5.9001 0.26677 5.80843 0.300103 5.7251C0.333437 5.64176 0.39177 5.56676 0.475104 5.5001L5.2251 0.750098C5.3251 0.650098 5.45844 0.600098 5.6251 0.600098C5.79177 0.600098 5.9251 0.650098 6.0251 0.750098C6.15844 0.883431 6.21677 1.02093 6.2001 1.1626C6.18344 1.30426 6.1251 1.43343 6.0251 1.5501L1.5751 6.0001L6.0251 10.4501C6.1251 10.5501 6.17927 10.6834 6.1876 10.8501C6.19594 11.0168 6.14177 11.1501 6.0251 11.2501C5.90844 11.3834 5.77094 11.4418 5.6126 11.4251C5.45427 11.4084 5.31677 11.3501 5.2001 11.2501L0.475104 6.5001C0.39177 6.43343 0.333437 6.35843 0.300103 6.2751C0.26677 6.19176 0.250103 6.1001 0.250103 6.0001Z" fill="black"/>
            </svg>
            Back to Search
        </a>
        
        <div className="Home-container">
            <div className="Top-container">
                <div className="Img-container">
                    <div className='Big-img'>
                    {details.images && details.images.length > 0 && (
  <img className='Big-img' src={details.images[0]} alt="" />
)}
                    </div>
                    <div className="Small-img-container">
                    {
                    details.images && details.images.length > 1 && (
                        <img className='Small-img' src={details.images[1]} alt="" />
                    )
                    }
                    {
                    details.images && details.images.length > 2 && (
                        <img className='Small-img' src={details.images[2]} alt="" />
                    )
                    }
                    {
                    details.images && details.images.length > 3 && (
                        <img className='Small-img' src={details.images[3]} alt="" />
                    )
                    }
                    </div>
                </div>
                <div className='Right-container'> 
                <div className="Info-container2">
                    {<p className='Address2' key={details._id}>{details.address.street}, {details.address.city}, {details.address.postcode}</p>}

                    <div className="Button-and-info">
                    <div className='Info-item'>
                        <p className='Detail-name'>Bedrooms</p>
                        <p className='Detail-data'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M5.12484 30.8333C4.84706 30.8333 4.61789 30.7431 4.43734 30.5625C4.25678 30.3819 4.1665 30.1528 4.1665 29.875V21.2083C4.1665 20.625 4.30539 20.0417 4.58317 19.4583C4.86095 18.875 5.27762 18.4306 5.83317 18.125V13.75C5.83317 12.6944 6.19428 11.8056 6.9165 11.0833C7.63873 10.3611 8.52762 10 9.58317 10H17.2498C17.8332 10 18.3609 10.1319 18.8332 10.3958C19.3054 10.6597 19.6943 11.0139 19.9998 11.4583C20.3054 11.0139 20.6873 10.6597 21.1457 10.3958C21.604 10.1319 22.1248 10 22.7082 10H30.4165C31.4721 10 32.361 10.3611 33.0832 11.0833C33.8054 11.8056 34.1665 12.6944 34.1665 13.75V18.125C34.7221 18.4306 35.1387 18.875 35.4165 19.4583C35.6943 20.0417 35.8332 20.625 35.8332 21.2083V29.875C35.8332 30.1528 35.7429 30.3819 35.5623 30.5625C35.3818 30.7431 35.1526 30.8333 34.8748 30.8333C34.5971 30.8333 34.3748 30.7431 34.2082 30.5625C34.0415 30.3819 33.9582 30.1528 33.9582 29.875V27.5H6.0415V29.875C6.0415 30.1528 5.95817 30.3819 5.7915 30.5625C5.62484 30.7431 5.40262 30.8333 5.12484 30.8333ZM20.9582 17.625H32.2915V13.75C32.2915 13.2222 32.104 12.7778 31.729 12.4167C31.354 12.0556 30.9165 11.875 30.4165 11.875H22.6248C22.1526 11.875 21.7568 12.0625 21.4373 12.4375C21.1179 12.8125 20.9582 13.25 20.9582 13.75V17.625ZM7.70817 17.625H19.0415V13.75C19.0415 13.25 18.8818 12.8125 18.5623 12.4375C18.2429 12.0625 17.8471 11.875 17.3748 11.875H9.58317C9.08317 11.875 8.64567 12.0625 8.27067 12.4375C7.89567 12.8125 7.70817 13.25 7.70817 13.75V17.625ZM6.0415 25.625H33.9582V21.2083C33.9582 20.7361 33.7984 20.3403 33.479 20.0208C33.1596 19.7014 32.7637 19.5417 32.2915 19.5417H7.70817C7.23595 19.5417 6.84012 19.7014 6.52067 20.0208C6.20123 20.3403 6.0415 20.7361 6.0415 21.2083V25.625ZM33.9582 25.625H6.0415H33.9582Z" fill="#3A5295"/>
                            </svg>
                            {details.bedroom_count}
                        </p>
                    </div>
                    <div className='Info-item'>
                        <p className='Detail-name'>Bathrooms</p>
                        <p className='Detail-data'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M11.5415 16.1667C10.7915 16.1667 10.1526 15.9028 9.62484 15.375C9.09706 14.8472 8.83317 14.2083 8.83317 13.4583C8.83317 12.7083 9.09706 12.0694 9.62484 11.5417C10.1526 11.0139 10.7915 10.75 11.5415 10.75C12.2915 10.75 12.9304 11.0139 13.4582 11.5417C13.9859 12.0694 14.2498 12.7083 14.2498 13.4583C14.2498 14.2083 13.9859 14.8472 13.4582 15.375C12.9304 15.9028 12.2915 16.1667 11.5415 16.1667ZM8.4165 35.8333C7.9165 35.8333 7.48595 35.6875 7.12484 35.3958C6.76373 35.1042 6.58317 34.6944 6.58317 34.1667C5.9165 34.1667 5.34706 33.9236 4.87484 33.4375C4.40261 32.9514 4.1665 32.3889 4.1665 31.75V23.7083C4.1665 23.375 4.28456 23.0903 4.52067 22.8542C4.75678 22.6181 5.0415 22.5 5.37484 22.5H8.83317V21.3333C8.83317 20.4167 9.15262 19.6389 9.7915 19C10.4304 18.3611 11.2221 18.0417 12.1665 18.0417C12.6387 18.0417 13.1109 18.1458 13.5832 18.3542C14.0554 18.5625 14.4582 18.8472 14.7915 19.2083L16.7082 21.4167C16.9026 21.6111 17.104 21.8056 17.3123 22C17.5207 22.1944 17.7359 22.3611 17.9582 22.5H29.5832V8.625C29.5832 8.01389 29.3748 7.49306 28.9582 7.0625C28.5415 6.63194 28.0415 6.41667 27.4582 6.41667C27.1526 6.41667 26.8609 6.45833 26.5832 6.54167C26.3054 6.625 26.0693 6.77778 25.8748 7L23.7498 9.125C23.8609 9.59722 23.8748 10.0694 23.7915 10.5417C23.7082 11.0139 23.5415 11.4722 23.2915 11.9167L19.5415 8.33333C19.9582 8.02778 20.4165 7.84028 20.9165 7.77083C21.4165 7.70139 21.9165 7.75 22.4165 7.91667L24.5415 5.83333C24.9304 5.44444 25.3748 5.125 25.8748 4.875C26.3748 4.625 26.9026 4.5 27.4582 4.5C28.5693 4.5 29.5137 4.90278 30.2915 5.70833C31.0693 6.51389 31.4582 7.48611 31.4582 8.625V22.5H34.6248C34.9582 22.5 35.2429 22.6181 35.479 22.8542C35.7151 23.0903 35.8332 23.375 35.8332 23.7083V31.75C35.8332 32.4167 35.5901 32.9861 35.104 33.4583C34.6179 33.9306 34.0554 34.1667 33.4165 34.1667C33.4165 34.6944 33.236 35.1042 32.8748 35.3958C32.5137 35.6875 32.0693 35.8333 31.5415 35.8333H8.4165ZM6.58317 32.2917H33.4165C33.5832 32.2917 33.7151 32.2431 33.8123 32.1458C33.9096 32.0486 33.9582 31.9167 33.9582 31.75V24.375H6.0415V31.75C6.0415 31.9167 6.09012 32.0486 6.18734 32.1458C6.28456 32.2431 6.4165 32.2917 6.58317 32.2917ZM33.9582 32.2917H6.0415H33.9582Z" fill="#3A5295"/>
                            </svg>
                            {details.bathroom_count}
                        </p>
                    </div>
                    <div className='Info-item'>
                        <p className='Detail-name'>Proprty Type</p>
                        <p className='Detail-data'>{details.property_type}</p>
                    </div>
                    <div className='Info-item'>
                        <p className='Detail-name'>Price</p>
                        <p className='Detail-data'>£{details.rent}</p>
                    </div>
                    <div className='Info-item'>
                        <p className='Detail-name'>Furnished Type</p>
                        <p className='Detail-data'>{details.furnished}</p>
                    </div>
                    <div className='Info-item'>
                        <p className='Detail-name'>Available from</p>
                        <p className='Detail-data'>{details.availability}</p>
                    </div>
                </div>
                
                </div>
                <div className="Button-container">
                    <a className='Short-button' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.025 19.4749L9.875 18.3999C7.875 16.5666 6.14583 14.8166 4.6875 13.1499C3.22917 11.4832 2.5 9.75824 2.5 7.9749C2.5 6.60824 2.9625 5.4624 3.8875 4.5374C4.8125 3.6124 5.95833 3.1499 7.325 3.1499C8.09167 3.1499 8.8875 3.34574 9.7125 3.7374C10.5375 4.12907 11.3 4.8499 12 5.8999C12.75 4.8499 13.5208 4.12907 14.3125 3.7374C15.1042 3.34574 15.8917 3.1499 16.675 3.1499C18.0417 3.1499 19.1875 3.6124 20.1125 4.5374C21.0375 5.4624 21.5 6.60824 21.5 7.9749C21.5 9.7749 20.7542 11.5124 19.2625 13.1874C17.7708 14.8624 16.0583 16.5999 14.125 18.3999L12.975 19.4499C12.6917 19.6999 12.3667 19.8249 12 19.8249C11.6333 19.8249 11.3083 19.7082 11.025 19.4749ZM11.5 7.1749C10.9833 6.24157 10.3583 5.5249 9.625 5.0249C8.89167 4.5249 8.125 4.2749 7.325 4.2749C6.24167 4.2749 5.35417 4.6249 4.6625 5.3249C3.97083 6.0249 3.625 6.90824 3.625 7.9749C3.625 8.85824 3.89583 9.76657 4.4375 10.6999C4.97917 11.6332 5.65833 12.5624 6.475 13.4874C7.29167 14.4124 8.175 15.3124 9.125 16.1874C10.075 17.0624 10.9667 17.8749 11.8 18.6249C11.85 18.6749 11.9167 18.6999 12 18.6999C12.0833 18.6999 12.15 18.6749 12.2 18.6249C13.0333 17.8916 13.925 17.0832 14.875 16.1999C15.825 15.3166 16.7083 14.4124 17.525 13.4874C18.3417 12.5624 19.0208 11.6291 19.5625 10.6874C20.1042 9.74574 20.375 8.84157 20.375 7.9749C20.375 6.90824 20.025 6.0249 19.325 5.3249C18.625 4.6249 17.7417 4.2749 16.675 4.2749C15.8583 4.2749 15.0875 4.52074 14.3625 5.0124C13.6375 5.50407 13.0083 6.2249 12.475 7.1749C12.4083 7.2749 12.3333 7.3499 12.25 7.3999C12.1667 7.4499 12.075 7.4749 11.975 7.4749C11.875 7.4749 11.7833 7.4499 11.7 7.3999C11.6167 7.3499 11.55 7.2749 11.5 7.1749Z" fill="black"/>
                        </svg>
                        Shortlist
                    </a>
                    <button className='View-button' onClick={()=>setIsOpen(true)}>Book Viewing</button>
                    <Modal
        isOpen={isOpen}
       onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
      >
        <div className="Modal-container">
        <div className='Top-modal'>
                <h2>Book a Viewing</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="71" viewBox="0 0 78 71" fill="none">
                    <path d="M14.525 58.7083V41.2H32.95V58.7083V41.2H14.525V58.7083ZM0.5 60.175V32.3083C0.5 31.5139 0.683333 30.7194 1.05 29.925C1.41667 29.1306 1.96667 28.4889 2.7 28L20.6667 15.1667C21.5833 14.5556 22.6069 14.25 23.7375 14.25C24.8681 14.25 25.8917 14.5556 26.8083 15.1667L44.6833 28C45.4167 28.4889 45.9667 29.1458 46.3333 29.9708C46.7 30.7958 46.8833 31.6361 46.8833 32.4917V36.8C46.0889 37.5333 45.3403 38.2972 44.6375 39.0917C43.9347 39.8861 43.3083 40.7722 42.7583 41.75V31.7583L23.6917 18.1917L4.625 31.7583V58.7083H14.525V41.2H32.95V58.7083H39.1833C39.3056 59.4417 39.4736 60.1444 39.6875 60.8167C39.9014 61.4889 40.1611 62.1611 40.4667 62.8333H28.7333V45.325H18.65V62.8333H3.15833C2.425 62.8333 1.79861 62.5736 1.27917 62.0542C0.759722 61.5347 0.5 60.9083 0.5 60.175ZM77.5 4.625V37.9C76.8889 37.1667 76.2319 36.5403 75.5292 36.0208C74.8264 35.5014 74.1083 34.9972 73.375 34.5083V4.625H36.8917V14.9833L32.7667 12.1417V4.71667C32.7667 3.55556 33.1639 2.5625 33.9583 1.7375C34.7528 0.9125 35.7306 0.5 36.8917 0.5H73.375C74.475 0.5 75.4375 0.9125 76.2625 1.7375C77.0875 2.5625 77.5 3.525 77.5 4.625ZM58.8917 18.7417H64.025V13.5167H58.8917V18.7417ZM61.825 70.1667C57.4861 70.1667 53.7889 68.6236 50.7333 65.5375C47.6778 62.4514 46.15 58.8 46.15 54.5833C46.15 50.1833 47.6778 46.4403 50.7333 43.3542C53.7889 40.2681 57.5167 38.725 61.9167 38.725C66.1944 38.725 69.8764 40.2681 72.9625 43.3542C76.0486 46.4403 77.5917 50.1833 77.5917 54.5833C77.5917 58.8 76.0486 62.4514 72.9625 65.5375C69.8764 68.6236 66.1639 70.1667 61.825 70.1667ZM60.5417 55.9583V64.3917C60.5417 64.8194 60.6944 65.1556 61 65.4C61.3056 65.6444 61.6417 65.7667 62.0083 65.7667C62.375 65.7667 62.6958 65.6292 62.9708 65.3542C63.2458 65.0792 63.3833 64.7583 63.3833 64.3917V55.9583H71.8167C72.2444 55.9583 72.5806 55.8056 72.825 55.5C73.0694 55.1944 73.1917 54.8583 73.1917 54.4917C73.1917 54.125 73.0694 53.8194 72.825 53.575C72.5806 53.3306 72.2444 53.2083 71.8167 53.2083H63.3833V44.6833C63.3833 44.3167 63.2458 43.9958 62.9708 43.7208C62.6958 43.4458 62.375 43.3083 62.0083 43.3083C61.6417 43.3083 61.3056 43.4458 61 43.7208C60.6944 43.9958 60.5417 44.3167 60.5417 44.6833V53.2083H52.1083C51.7417 53.2083 51.4208 53.3306 51.1458 53.575C50.8708 53.8194 50.7333 54.125 50.7333 54.4917C50.7333 54.8583 50.8861 55.1944 51.1917 55.5C51.4972 55.8056 51.8333 55.9583 52.2 55.9583H60.5417Z" fill="#3A5295"/>
                </svg>
        </div>
        {<p className='Modal-address' key={details._id}>{details.address.street}, {details.address.city}, {details.address.postcode}</p>}
        <div className="Input-container">
<div className="Left-modal">
        <p className='The-word'>Name</p>
        <input className='Small-input' type="text" placeholder='Enter Your Name'/>
        <p className='The-word'>Phone Number</p>
        <input className='Small-input' type="text" placeholder='Enter Your Phone Number'/>
        <p className='The-word'>Email</p>
        <input className='Small-input' type="text" placeholder='Enter Your Email Address'/>
        </div>
        <div className='Right-modal'>
            <p className='The-word'>Message</p>
            <input className='Big-input' type="text" placeholder='Enter Your Message'/>
            <button className='Modal-button'>Submit</button>
        </div>
        </div>
        </div>
      </Modal>
                    </div>
</div>
            </div>
            <div className="Mid-container">
                <div className='Paragraph'>
                    <p className='The-word'>Description</p>
                    <p className='Property-details'>{details.property_description}</p>
                </div>
                <div className='Prices'>
                    <p className='The-word'>Bedroom Prices</p>
                {bedroomPricesArray.map(([bedroomName, price]) => (
              <p className='Individual-prices' key={bedroomName}> 

                {bedroomName}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;£{price}
              </p>
            ))}
            </div>
            </div>
            <div className="Key-features">
                    <p className='The-word'>Key Features</p>
                    {keyFeaturesList}
                </div>
        </div>
    </div>
  )
}

export default SpecificApartment