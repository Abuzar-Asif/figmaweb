import React from 'react'
import '../ChooseUs/ChooseUs.css'

const ChooseUs = () => {
  return (
    <>
    <div className="container-fluid">
     <div className="container m-auto">
        <div className="row">
            <div className="py-5 col-md-12 d-flex justify-content-center align-items-center">
                <h4 className='chooseheading'>
                    Why Choose Us
                </h4>
            </div>
            <div className="row pb-sm-5">
                <div className="col-md-3 choosediv3">
                <ul className='centerul'>
                        <li>
                                <h4  className='chooseh4'> Quality</h4>
                        </li>
                        <p className='choosepara'>
                        Lorem ipsum dolor sit amet consectetur <br /> 
                        adipiscing elit Ut et massa mi. Aliquam <br />
                         in hendrerit urna.
                        </p>
                    </ul>
                </div>
                <div className="col-md-3 choosediv3">
                <ul className='centerul'>
                        <li>
                            <h4 className='chooseh4'> Reliabilty</h4>
                        </li>
                        <p className='choosepara'>
                        Lorem ipsum dolor sit amet consectetur <br /> 
                        adipiscing elit Ut et massa mi. Aliquam <br />
                         in hendrerit urna.
                        </p>
                    </ul>
                </div>
                <div className="col-md-3 choosediv3">
                    <ul className='centerul'>
                        <li>
                            <h4 className='chooseh4'> Flexibilty</h4>
                        </li>
                        <p className='choosepara'>
                        Lorem ipsum dolor sit amet consectetur <br /> 
                        adipiscing elit Ut et massa mi. Aliquam <br />
                         in hendrerit urna.
                        </p>
                    </ul>
                </div>
                <div className="col-md-3 choosediv3 chooseborder">
                <ul className='centerul' >
                        <li >
                            <h4 className='chooseh4'> Competence</h4>
                        </li>
                        <p className='choosepara'>
                        Lorem ipsum dolor sit amet consectetur <br /> 
                        adipiscing elit Ut et massa mi. Aliquam <br />
                         in hendrerit urna.
                        </p>
                        
                    </ul>
                </div>
            </div>
        </div>
     
     </div>
     </div>
    </>
  )
}

export default ChooseUs
