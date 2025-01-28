import React from 'react'
import '../Client/Client.css'
const Client = () => {
  return (
    <>
    
    <div className='g-0 py-5 row ClientFluid d-flex justify-content-center flex-wrap align-items-center'>
       <div className='col-12 col-sm-5  d-flex justify-content-evenly flex-wrap align-items-center '>
        <h3 className='clientheading '>
        
        Words from <br /> our trusted <br /> clients
        </h3>
        
        </div>
    <div className='col-12 col-sm-6 clientflex d-flex flex-column justify-content-center  align-items-start'>
        <p className='clientpara1 pb-3'> Amy was a pleasure to work with. Her understanding of technology helped our project dramatically. She simply knows <br /> what she is doing, I was not disappointed. I was so impressed with Amy that if I have any future work, I would love to <br /> work with her again.</p>
     
        <p className='clientpara2'>Benjamin Wright</p>
        <p className='clientpara3'>CEO</p>
    </div>
    </div>
    
    
    </>
  )
}

export default Client
