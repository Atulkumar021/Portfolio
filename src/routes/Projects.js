import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import PricingCard from '../components/PricingCard'
import Workcard from '../components/Workcard'
const Projects = () => {
  return (
   <div>
     <Navbar/>
    <Heroimg2 heading={"Projects." } text={"Some of my most recent works"}/>
    <Workcard/>
    <PricingCard/>
    <Footer/>
   </div>
  )
}

export default Projects