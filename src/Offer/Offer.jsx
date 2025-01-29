import React from 'react'
import '../Offer/Offer.css'
const Offer = () => {
  return (
    <>
    <div className="container-fluid pt-1 pb-5-xl ">
    <div className="container-lg m-auto pb-5 pb-sm-0 pt-3-xl">
            <div className='line'>
                
            </div>
            <div className='d-flex   justify-content-between align-items-center mt-3'>
            <div className="content">
                <p className='firstpara d-none d-block-sm'>We Are geared Towards</p>
                <h3 className='secondpara'>
                We are geared towards <br /> versatility and offering <br />efficiency and the best <br />quality services at every step.
                </h3>
            </div>
            <div className="butto mb-5 buttomargin text-white">
                <button className='btn buttoon'>
                Contact us  <span><img src="arrow.png" alt="" /></span>
                </button> 
            </div>
            </div>
            <div className="paragraph offerend  mt-5 d-flex justify-content-between  align-items-center">
           
                    <p className='onepara text-justify  '>At Pixarsart our aim is to create the most effective online presence for your <br />  brand. We use the latest technology to provide you with the most intuitive <br /> solutions to cater to all your business needs. We want to see your business <br /> thrive.</p>
             
         
                    <p className='twopara text-justify '>Our Team over at Pixarsart are committed to providing creative and innovative <br /> solutions in Web and App Development, UI/UX Design, Backend Development, <br /> Digital Product Development, Server Management, Continuous Integration and <br /> Continuous deployment as well as effective eCommerce solutions. We are <br /> progressively working with clients with legacy systems as well as progressive  <br />technologies including VR and AR.</p>
             
            </div>
    </div>
      
    </div>
   
    </>
  )
}

export default Offer
