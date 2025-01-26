import React from 'react'
import '../Cards/Cards.css'
import '../App.css'
const Cards = () => {
  return (
    <>
    <div className="container-fluid g-0 bg-black text-white py-5">
      
        <div className="container pt-3 d-flex flex-column justify-content-center align-items-center m-auto row">
              <div className="col-md-12 cardHeading  d-flex flex-column justify-content-around align-items-center m-auto">
              <h3 className='cardsheading'>
               Our Featured Blogs
               </h3>
               <p className='cardspara text-center'>
               Check out our guides to stay updated with the market and economy.
               </p>
              </div>
              
        </div>

    <div className="row g-0 m-auto container py-2 d-flex justify-content-around align-items-between">
        <div className="col-md-4 Cardpadding">
            <div className="card-image-top ">
                <img className='rectanglewidth' src="Rectangle1.png" alt="Picture" />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <p className='cardbodypara py-2'>
                    All Home eCommerce General Main . Sep 24, 2020
                </p>
                <h4 className='cardbodyheading pb-4'>
                    How To Generate Leads For  Your eCommerce Store
                </h4>
                <p className='cardbodypara py-2'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
            </div>

        </div>
        <div className="col-md-4 Cardpadding">
            <div className="card-image-top ">
                <img className='rectanglewidth' src="Rectangle1.png" alt="Picture" />
            </div>
            <div className="card-body ">
                <p className='cardbodypara py-2'>
                All General Main . Sep 24, 2020
                </p>
                <h4 className='cardbodyheading pb-4'>
                How To Become An Expert Email Marketer In No Time
                </h4>
                <p className='cardbodypara py-2'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
            </div>

        </div>
        <div className="col-md-4 Cardpadding">
            <div className="card-image-top ">
                <img className='rectanglewidth' src="Rectangle1.png" alt="Picture" />
            </div>
            <div className="card-body">
                <p className='cardbodypara py-2'>
                All Home eCommerce General Main Shopify Woocommerce. Sep 24, 2020
                </p>
                {/* <br /> */}
                
                <h4 className='cardbodyheading pb-5'>
                    {/* <br /> */}
                Shopify Vs Woocommerce
                </h4>
                
                <p className='cardbodypara py-2'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
            </div>

        </div>
    </div>
    </div>
      
    </>
  )
}

export default Cards
