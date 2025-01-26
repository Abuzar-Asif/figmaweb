import React from 'react'
import './Backgroundimage.css'
import '../App.css'
const Backgroundimage = () => {
  return (
    <>
    <div className="container-fluid bg-white text-white w-100   m-0 p-0 mountainbg">
      <div className="row g-0  backgroundimg ">
        <div className="col-md-4 col-lg-5 col-xxl-8 d-none d-md-flex  backgrouimg d-flex align-items-center justify">
          <img className='backgrouimg' src="Group-2-1 (2).png" alt="" />
        </div>
        <div className="col-md-8 col-lg-7 col-xxl-4 bgnav">
          <ul className='backgroundul d-flex justify-content-around align-items-center '>
            <li className='backroundli px-1'>SERVICES</li>
            <li className='backroundli px-1'>OUR WORK</li>
            <li className='backroundli px-1'>BLOG</li>
            <li className='backroundli px-1'>CAREERS</li>
            <li className='backroundli px-1'>CONTACT US </li>
            <li className='backroundli px-1'><img src="arrow.png" alt="" /></li>
            <li className='backroundli px-1'> <img src="arrow.png" alt="" /></li>
          </ul>
        </div>
        {/* <div className="col-12">
          <h3 className='digitalheading'>
            We are the Digital
          </h3>
          <h1 className='Artists'>
            ARTISTS
          </h1>
        </div> */}
      </div>
       
  

    </div>
      
    </>
  )
}

export default Backgroundimage
