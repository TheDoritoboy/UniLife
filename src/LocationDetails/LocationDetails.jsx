import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './LocationDetails.css'
function LocationDetails() {
    const {itemId} =useParams()

  const [city, setCity] = useState('')

  useEffect(
    ()=>
    {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${itemId}`)
      .then(res =>{
        console.log(res.data.response)

        setCity(res.data.response)
      })
      .catch(err=> console.log(err))


      console.log('get item info', itemId)      
    },[]
  )
  return (
    <div>
<p>{city.rent}</p>

    </div>
  )
}

export default LocationDetails