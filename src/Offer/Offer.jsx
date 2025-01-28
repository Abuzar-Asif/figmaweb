import React from 'react'
import '../Offer/Offer.css'
const Offer = () => {
  return (
    <>
    <div className="container-fluid pt-1 pb-5 ">
    <div className="container m-auto">
            <div className='line'>
                
            </div>
            <div className='d-flex  justify-content-between align-items-center mt-3'>
            <div className="content">
                <p className='firstpara'>We Are geared Towards</p>
                <p className='secondpara'>
                We are geared towards <br /> versatility and offering you <br />efficiency and the best <br />quality services at every step.
                </p>
            </div>
            <div className="butto mb-5 buttomargin me-2 text-white">
                <button className='btn '>
                Contact us  <span><img src="arrow.png" alt="" /></span>
                </button> 
            </div>
            </div>
            <div className="paragraph  mt-5 d-flex justify-content-evenly align-items-center">
           
                    <p className='onepara '>At Pixarsart our aim is to create the most effective online presence for your <br />  brand. We use the latest technology to provide you with the most intuitive <br /> solutions to cater to all your business needs. We want to see your business <br /> thrive.</p>
             
         
                    <p className='twopara '>Our Team over at Pixarsart are committed to providing creative and innovative <br /> solutions in Web and App Development, UI/UX Design, Backend Development, <br /> Digital Product Development, Server Management, Continuous Integration and <br /> Continuous deployment as well as effective eCommerce solutions. We are <br /> progressively working with clients with legacy systems as well as progressive  <br />technologies including VR and AR.</p>
             
            </div>
    </div>
      
    </div>
   
    </>
  )
}

export default Offer
