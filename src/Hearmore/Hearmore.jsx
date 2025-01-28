import React from 'react'
import '../Hearmore/Hearmore.css'
const Hearmore = () => {
  return (
    <>
   <div className="container-fluid py-5">
    <div className="container py-5 m-auto">
        <div className="row">
            <div className="col-md-12">
                <h3 className='hearheading pb-5'>
                We would love to <br /> hear more about your <br /> project
                </h3>
            </div>
        </div>
        <div className="py-5 row d-flex justify-content-center align-items-center">
            <div className="col-md-12  butto  text-white">
            
                <button className='btn py-5 '>
                Lets Talk Us  <span><img src="arrow.png" alt="" /></span>
                </button> 
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Hearmore
