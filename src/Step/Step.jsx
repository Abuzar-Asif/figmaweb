import React from 'react'
import '../Step/Step.css'
const Step = () => {
  return (
    <>
     <div className="container-fluid py-5">
        <div className="container row g-0 stepsheadingflex m-auto d-flex flex-wrap-reverse justify-content-end">
                <div className='col-12 calflex start col-sm-8 col-md-9 d-flex justify-content-center justify-content-end-lg'>
                    <h3 className='stepsheading'>
                                     We are geared towards <br /> versatility and offering <br /> you efficiency and best <br /> quality services at every 
                          <br />  step.
                     </h3>
                </div>
                <div className='col-12 col-sm-4 col-md-3  d-flex justify-content-end'>
                        <img className='rectangle1image img-fluid' src="Rectangle1.png" alt="" />
                </div>
                {/* .............. */}
               
        </div>
        <div className="container row g-0 stepsheadingflex m-auto d-flex py-5">
                <div className='col-12 col-sm-5'>
                    <img className='rectangle2image' src="Rectangle2.png" alt="" />
                </div>
                <div className='col-12 col-sm-7 d-flex stepheight flex-column justify-content-between align-items-start'>
                    <div className='p-5 steppaddingremove'>
                        < p className='stepPara'>At Pixarsart our aim is to create the most effective online presence <br /> for your brand. We use the latest technology to provide you with the <br /> most intuitive solutions to cater to all your business needs. We want <br />to see your business thrive.
                        <br />
                        <br />
                      
                            Our Team over at Pixarsart are committed to providing creative and <br /> innovative solutions in Web and App Development, UI/UX Design,<br /> Backend Development, Digital Product Development, Server <br /> Management, Continuous Integration and Continuous deployment as <br />well as effective eCommerce solutions. We are progressively <br />working with clients with legacy systems as well as progressive  <br /> technologies including VR and AR.
                        </p>
                        
                    </div>
                    <div className="butto  stepbutto  text-white">
                         <button className='btn  ms-3'>
                            Contact us  <span><img src="arrow.png" alt="" /></span>
                         </button> 
                    </div>
                </div>
        </div>
     </div>
    </>
  )
}

export default Step
