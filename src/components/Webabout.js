import React from 'react'
import './Webaboutstyle.css'
import { Link } from 'react-router-dom'
import Firstimg from '../assets/aboutimg1.jpg'
import Secondimg from '../assets/aboutimg2.jpg'
const Webabout = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Front-End Developer. I create Responsive secure websites for my clients.</p>
            <Link to="/contact" ><button className='btn text-light'>Contact</button></Link>
          
        </div>
        <div className="rights">   
                    <img className='secondimage' src={Secondimg} alt="img" />
            </div>
    </div>
  )
}

export default Webabout