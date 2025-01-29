import React from 'react'
import '../Hearmore/Hearmore.css'
const Hearmore = () => {
  return (
    <>
   <div className="container-fluid py-2 py-sm-5">
    <div className="container m-auto">
        <div className="row g-0">
            <div className="col-md-12 pt-5  py-sm-5">
                <h3 className='hearheading '>
                We would love to <br /> hear more about your <br /> project
                </h3>
            </div>
        </div>
        <div className="py-5 row d-flex justify-content-center align-items-center">
            <div className="col-md-12  butto  text-white">
            
                <button className='btn '>
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
