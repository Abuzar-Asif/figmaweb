import React from 'react'
import '../Cards/Cards.css'
import '../App.css'
const Cards = () => {
  return (
    <>
    <div className="container-fluid bg-black text-white">
      
        <div className="container py-3 d-flex flex-column justify-content-center align-items-center m-auto row">
              <div className="col-md-12">
              <h3 className='cardsheading'>
               Our Featured Blogs
               </h3>
               <p className='cardspara text-center'>
               Check out our guides to stay updated with the market and economy.
               </p>
              </div>
              
        </div>

    <div className="row m-auto container py-5 d-flex justify-content-around align-items-between">
        <div className="col-3">
            <div className="card-image-top ">
                <img src="Rectangle1.png" alt="Picture" />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <p className='cardbodypara'>
                    All Home eCommerce General Main . Sep 24, 2020
                </p>
                <h4 className='cardbodyheading'>
                    How To Generate Leads For  Your eCommerce Store
                </h4>
                <p className='cardbodypara'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
            </div>

        </div>
        <div className="col-3">
            <div className="card-image-top ">
                <img src="Rectangle1.png" alt="Picture" />
            </div>
            <div className="card-body ">
                <p className='cardbodypara'>
                All General Main . Sep 24, 2020
                </p>
                <h4 className='cardbodyheading'>
                How To Become An Expert Email Marketer In No Time
                </h4>
                <p className='cardbodypara'>
                Read More <span><img src="arrow.png" alt="" /></span>
                </p>
            </div>

        </div>
        <div className="col-3">
            <div className="card-image-top ">
                <img src="Rectangle1.png" alt="Picture" />
            </div>
            <div className="card-body">
                <p className='cardbodypara'>
                All Home eCommerce General Main Shopify Woocommerce. Sep 24, 2020
                </p>
                <br />
                <h4 className='cardbodyheading'>
                Shopify Vs Woocommerce
                </h4>
                
                <p className='cardbodypara'>
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
