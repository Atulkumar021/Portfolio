import React from 'react'
import './PricingCardstyle.css'
import { Link } from 'react-router-dom'
const PricingCard = () => {
  return (
    <>
    <div className="container">
    <div className="card text-center mb-3  mx-2" style={{width: '22rem',height:'24rem'}}>
  <div className="card-body">
    <h5 className="card-title">-Basic-</h5>
    <div className="card-text  ">
        <p>------------</p>
        <p>$100</p>
        <p>-3 Days-</p>
        <p>-3 Pages-</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
       
    </div>
    <Link to="/contact" className="btn btn-primary text-light">Purchase</Link>
  </div>
</div><div className="card text-center mb-3  mx-2" style={{width: '22rem',height:'24rem'}}>
  <div className="card-body">
    <h5 className="card-title">-premium-</h5>
    <div className="card-text  ">
    <p>------------</p>
        <p>$200</p>
        <p>-2 Days-</p>
        <p>-5 Pages-</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
       
    </div>
    <Link to="/contact" className="btn btn-primary text-light">Purchase </Link>
  </div>
</div><div className="card text-center mb-3  mx-2" style={{width: '22rem',height:'24rem'}}>
  <div className="card-body">
    <h5 className="card-title  ">-Business</h5>
    <div className="card-text  ">
    <p>------------</p>
        <p>$300</p>
        <p>-5 Days-</p>
        <p>-8 Pages-</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
       
    </div>
    
    <Link to="/contact" className="btn btn-primary text-light">Purchase</Link>
  </div>
</div>
</div>
    </>
  )
}

export default PricingCard