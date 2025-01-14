import React from 'react'
import '../GetaQuote/GetaQuote.css'
const GetaQuote = () => {
  return (
    <>
    <div className="container-fluid quoteborder py-5">
        <div className="container m-auto">
            <div className="row d-flex justify-content-around align-items-center flex-wrap">
                <div className="col-md-6">
                    <h3 className='quoteheading'>
                        Get A Quote 
                    </h3>
                </div>
                <div className="col-md-6 butto  text-white">
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

export default GetaQuote
