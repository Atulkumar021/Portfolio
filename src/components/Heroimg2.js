import React from 'react'
import './Herostyle2.css'
import Heroimga2 from '../assets/img1.jpg'
const Heroimg2 = (props) => {
  return (
    <div>
        <div className="hero-img">
            <div className="image">
                <img className='img' src={Heroimga2} alt="IMAGE" />
            </div>
            <div className="heading">
                <h1 style={{fontSize:'2.9rem'}}>{props.heading}</h1>
                <p style={{fontSize:'1.8rem'}}>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Heroimg2