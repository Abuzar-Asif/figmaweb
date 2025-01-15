import React from 'react'
import '../Navbar/Navbar.css'
const Navhead = () => {
  return (
    <>
     <div  className='container-fluid bar text-white mainnavhead '>
      <div className='d-flex w-100 row justify-content-end flex-wrap align-items-center h-100 '>
             <div className='col-6'>

             </div>
              <div className='col-lg-2 resone d-flex align-items-center justify-content-end  '>
              <p className='pone pe-2' >USA:</p>
              <p className='ptwo'>+1 (972) 464-2823</p>
              <p className='pthree'>|</p>

              </div>
              <div className='col-lg-2 resone d-flex justify-content-end align-items-center  '> 
              <p className='pone pe-2' >UAE:</p>     
              <p className='ptwo'>+971 058 565-5166</p>
              <p className='pthree'>|</p>
              </div>
              <div className='col-lg-2 resone d-flex justify-content-center align-items-center  ' >
             <p className='pone pe-2' >PAK:</p>  
             <p className='ptwo'> +92 334 7492777 </p>
           
             </div>
    
      </div>
            
      </div>
     
 
    </>
  )
}

export default Navhead


