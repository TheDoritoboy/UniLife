import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './CitySearch.css'
function CitySearch() {
    const [cities, setCities] = useState([])



    useEffect(
    ()=>{ 
      axios.get('https://unilife-server.herokuapp.com/cities')
    .then(res =>{
      console.log(res.data.response)
      setCities(res.data.response) 
  })
  .catch(err =>{
      console.log(err)
  })
    }
    )
  return (
    <div className='Name-container'>
     {
        cities.map(item => <p classname='City-name'>{item.name}</p>)
     }
    </div>
  )
}

export default CitySearch