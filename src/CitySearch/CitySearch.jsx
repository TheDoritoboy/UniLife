import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './CitySearch.css'
function CitySearch() {
    const [cities2, setCities2] = useState([])



    useEffect(
    ()=>{ 
      axios.get('https://unilife-server.herokuapp.com/cities')
    .then(res =>{
      console.log(res.data.response)
      setCities2(res.data.response) 
  })
  .catch(err =>{
      console.log(err)
  })
    }
    )
  return (
    <div>
      <img className="Banner" src="/src/assets/overlay.png" alt="" />
      <div className="Banner-text">
            <p className='Large-text'>Student Accomodation</p>
            <p className='Small-text'>UniLife have student accommodation available across the UK.
Whatever you're after, we can help you find the right student accommodation for you. </p>
          </div> 
      <div className='Name-container'>
        {
            cities2.map(item2 => <a href={`/City/${item2._id}`} key={item2._id} className='City-name2'>{item2.name}</a>)
        }
      </div>
    </div>
  )
}

export default CitySearch