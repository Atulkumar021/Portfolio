import React from 'react'
import './Contactstyle.css'
import { Link } from 'react-router-dom'
const Contactfield = () => {
  return (
     <div className="contact">
       <div className="lables">
       <label htmlFor="name">Your Name</label>
       </div>
       <div className="inputfield">
       <input className='fields' type="text" />
       </div>
       <div className="lables">
       <label htmlFor="name">E-mail</label>
       </div>
       <div className="inputfield">
       <input className='fields' type="text" />
       </div>
       <div className="lables">
       <label htmlFor="name">Subject</label>
       </div>
       <div className="inputfield">
       <input className='fields' type="text" />
       </div>
       <div className="lables">
       <label htmlFor="name">Message</label>
       </div>
       <div className="inputfield">
      <textarea className='fieldss' cols="24" rows="3"></textarea>
       </div>
       <div className="bt-btn">
       <Link to="/contact" className='btn my-3 text-light'>Submit</Link>

       </div>
     </div>
  )
}

export default Contactfield