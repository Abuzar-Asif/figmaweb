import React from 'react'
import './Backgroundimage.css'
import '../App.css'
const Backgroundimage = () => {
  return (
    <>
    <div className="container-fluid backgroundimg  m-0 p-0">
      <div className="row">
        <div className="col-6">
          <img src="../../public/Group-2-1 (2).png" alt="" />
        </div>
        <div className="col-6">
          <ul className='backgroundul d-flex justify-content-around align-items-center py-3'>
            <li className='backroundli px-1'>SERVICES</li>
            <li className='backroundli px-1'>OUR WORK</li>
            <li className='backroundli px-1'>BLOG</li>
            <li className='backroundli px-1'>CAREERS</li>
            <li className='backroundli px-1'>CONTACT US </li>
            <li className='backroundli px-1'><img src="arrow.png" alt="" /></li>
            <li className='backroundli px-1'> <img src="arrow.png" alt="" /></li>
          </ul>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default Backgroundimage
