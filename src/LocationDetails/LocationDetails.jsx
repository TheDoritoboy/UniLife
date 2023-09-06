import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './LocationDetails.css'
import ApartmentCards from './../ApartmentCards/ApartmentCards';
function LocationDetails() {
    const {itemId} =useParams()

  const [apartment, setApartment] = useState([])

  useEffect(
    ()=>
    {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${itemId}`)
      .then(res =>{
        console.log(res.data.response)

        setApartment(res.data.response)
      })
      .catch(err=> console.log(err))


      console.log('get item info', itemId)      
    },[]
  )
  return (
    <div>
      
      {
      
      /*{
        city.map(item => <ApartmentCards key={city._id} apartment={item}/>)
      }*/
      }

    </div>
  )
}

export default LocationDetails