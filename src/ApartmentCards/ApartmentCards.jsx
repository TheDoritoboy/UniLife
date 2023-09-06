import React, {useEffect, useState} from 'react'
import axios from 'axios'
function ApartmentCards(apartment) {


  return (
    <div>
      <p>{apartment.adress}</p>
    </div>
  )
}

export default ApartmentCards