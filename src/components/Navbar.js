import { Link } from 'react-router-dom'
import './Navbarstyle.css'
import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
const Navbar = () => {
const[click,setclick]=useState(false)
const handleclick=()=>{
    setclick(!click)
}
const[color,setcolor]=useState(false)
const changecolor=()=>{
    if(window.scrollY>=100)
    {
     setcolor(true)

    }
    else{
        setcolor(false)
    }
}
window.addEventListener("scroll",changecolor)
  return (
  <>
  <div className={color?"header header-bg":"header"}>
    <Link to="/">
        <h1>Portfolio</h1>
    </Link>
    <ul className={click?"nev-menu active" :"nev-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/projects">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleclick}>
        {click?(<FaTimes size={25} style={{color:"#fff"}}/>):( <FaBars size={25} style={{color:"#fff"}}/>)}
    
   
    </div>
  </div>
  </>
  )
}

export default Navbar