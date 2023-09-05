import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './LocationDetails.css'
function LocationDetails(city) {
    const {itemId} =useParams()

  const [item, setItem] = useState('')

  useEffect(
    ()=>
    {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${itemId}`)
      .then(res =>{
        console.log(res.data)

        setItem(res.data)
      })
      .catch(err=> console.log(err))


      console.log('get item info', itemId)      
    },[]
  )
  return (
    <div>
<p>{city.name}</p>

    </div>
  )
}

export default LocationDetails