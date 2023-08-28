import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Homepage() {
  const [cities, setCities] = useState([])


  useEffect(
  ()=>{ axios.get('https://unilife-server.herokuapp.com/cities')
  .then(res =>{
    console.log(res.data)
    setCities(res.data) 
})
.catch(err =>{
    console.log(err)
})
  }
  )
  
  return (
    <div>Homepage</div>
  )
}

export default Homepage