import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Webabout from '../components/Webabout'
const About = () => {
  return (
   <div>
     <Navbar/>
     <Heroimg2 heading={"About"} text={"Im a friendly Front-End Developer"}/>
     <Webabout/>

    <Footer/>
   </div>
  )
}

export default About