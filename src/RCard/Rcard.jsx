import React from 'react'
import '../RCard/Rcard.css'
const Rcard = () => {
  return (
    <>
    <div className="container-fluid py-5">
        <div className="container m-auto">
            <div className="row g-0 py-3">
            <h3 className='Rfeature'>
               Our Featured Blogs
               </h3>
               <p className='Rguide'>
               Check out our guides to stay updated with the market and economy.
               </p>
            </div>
            <div className="row">
                <div className="col-12 py-3  col-lg-4 d-flex flex-column justify-content-between align-items-center align-items-lg-start">
               
                <img className='img-fluid' src="Rectangle2.png" alt="" />
                <p className='Rpara py-2'>
                    All Home eCommerce General Main . Sep 24, 2020
                </p>
                <h4 className='Rheading py-2'>
                    How To Generate Leads  Your eCommerce Store
                </h4>
                <p className='Rarrow py-2'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
                </div>
                <div className="col-12 py-3 col-lg-4 d-flex flex-column justify-content-between align-items-center align-items-lg-start ">
               
               <img className='img-fluid' src="Rectangle2.png" alt="" />
               <p className='Rpara py-2'>
               All General Main . Sep 24, 2020
                </p>
                <h4 className='Rheading py-2'>
                How To Become An Expert Email Marketer In No Time
                </h4>
                <p className='Rarrow py-2'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
               </div>
               <div className="col-12 py-3 col-lg-4 d-flex flex-column justify-content-between align-items-center align-items-lg-start">
               
                <img className='img-fluid' src="Rectangle2.png" alt="" />
                <p className='Rpara py-2'>
                All Home eCommerce General Main Shopify Woocommerce. Sep 24, 2020
                </p>
                <h4 className='Rheading py-2'>
                Shopify Vs Woocommerce
                </h4>
                <p className='Rarrow  py-2'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rcard