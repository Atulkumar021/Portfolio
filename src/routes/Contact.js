import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Contactfield from '../components/Contactfield'
const Contact = () => {
  return (
   <div>
     <Navbar/>
     <Heroimg2 heading={"Contact"} text={"Let's have a Chat"}/>
     <Contactfield/>
    <Footer/>
   </div>
  )
}

export default Contact