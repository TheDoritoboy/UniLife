import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './LocationCards.css'
function LocationCards({city}) {




  return (
    <div className="Super-container">
        <div className='Card-container'>
          <img className='City-img' src={city.image_url} alt={city.name} />
          <div className='Card-text'>
            <p className='City-name'>{city.name}</p>
            <p className='Property-count'>{city.property_count} properties</p>
          </div>
        </div>
    </div>
  )
}

export default LocationCards