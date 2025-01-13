import React from 'react'
import '../Navbar/Navbar.css'
const Navhead = () => {
  return (
    <>
     <div  className='container-fluid bar text-white '>
      <div className='d-flex justify-content-end flex-wrap align-items-center h-100 '>
              <div className='d-flex align-items-center p-2 '>
              <p className='pone' >USA:</p>
              <p className='ptwo'>+1 (972) 464-2823</p>
              <p className='pthree'>|</p>

              </div>
              <div className=' d-flex justify-content-center align-items-center p-2 '> 
              <p className='pone' >UAE:</p>     
              <p className='ptwo'>+971 058 565-5166</p>
              <p className='pthree'>|</p>
              </div>
              <div className='d-flex justify-content-center align-items-center p-2 ' >
             <p className='pone' >PAK:</p>  
             <p className='ptwo'> +92 334 7492777 </p>
           
             </div>
    
      </div>
            
      </div>
     
 
    </>
  )
}

export default Navhead


