import React from 'react'
import './Footerstyle.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <p>123 Housing society.</p>
                    <p>Bareilly</p>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <p>1-222-333-444</p>
                </div>
                <div className="email">
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <p>abc@gmail.com</p>
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>This is me Atul kumar. CEO & Founder of ABC. I enjoy discussing new projects and design challenges</p>
                <div className="socilaicon">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer