import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Homepage from './Homepage/Homepage'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element= {<Homepage />}/>
      <Route path='/' element= {<Homepage />}/>
      </Routes>
    <Contact/>
    <Footer/>

    </BrowserRouter>
  )
}

export default App
