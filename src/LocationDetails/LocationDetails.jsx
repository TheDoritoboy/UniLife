import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './LocationDetails.css'
import ApartmentCards from './../ApartmentCards/ApartmentCards';
function LocationDetails() {
    const {itemId} =useParams()

    const [abodes, setAbodes] = useState([])

  useEffect(
    ()=>
    {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${itemId}`)
      .then(res =>{
        console.log(res.data.response)

        setAbodes(res.data.response)
      })
      .catch(err=> console.log(err))


      console.log('get item info', itemId)      
    },[]
  )
  return (
    <div className='Acual-abode'>
      {
        abodes.map(item => <ApartmentCards key={item._id} abode={item}/>)
      }
    </div>
  )
}

export default LocationDetails