import './Heroimgstyle.css'
import React from 'react'
import Introimg from '../assets/2175196.jpg'
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={Introimg} />
        </div>
        <div className="content">
            <p>Hi I am a Computer Science Student.</p>
            <h1>React Developer</h1>
            <Link to="/projects" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>

        </div>
    </div>
  )
}

export default Heroimg