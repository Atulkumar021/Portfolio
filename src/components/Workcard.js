import React from 'react'
import Cardimg from '../assets/cardimg1.webp'
import { Link } from 'react-router-dom'
const Workcard = () => {
  return (
    <div className="card-group my-4" >
  <div className="card mx-3" style={{width: '22rem',height:'32rem',border:"1px solid black",borderRadius:"9px"}}>
  <img className='imges' src={Cardimg} alt="IMAGE" />
    <div className="card-body" >
      <h5 className="card-title">Card title</h5>
      <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
    <Link to="/contact" className="btn btn-primary text-light">View</Link>
    </div>
  </div>
  <div className="card mx-3" style={{width: '22rem',height:'32rem',border:"1px solid black",borderRadius:"9px"}}>
    
    <img className='imges' src={Cardimg} alt="IMAGE" />
    <div className="card-body">
      <h5 className="card-title text-dark ">Card title</h5>
      <p className="card-text text-dark">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
    <Link to="/contact" className="btn btn-primary text-light">View</Link>
    </div>
  </div>
  <div className="card mx-3" style={{width: '22rem',height:'32rem',border:"1px solid black",borderRadius:"9px"}}>
  <img className='imges' src={Cardimg} alt="IMAGE" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
    <Link to="/contact" className="btn btn-primary text-light">View</Link>
    </div>
  </div>
</div>
  )
}

export default Workcard