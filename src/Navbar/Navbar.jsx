// import React from 'react'
// import '../Navbar/Navbar.css'
// const Navhead = () => {
//   return (
//     <>
//      <div  className='container-fluid bar text-white mainnavhead '>
//       <div className='d-flex row justify-content-end flex-row align-items-center h-100 '>

//               <div className='  d-flex align-items-center  flex-nowrap justify-content-end  '>
//               <p className='pone pe-2' >USA:</p>
//               <p className='ptwo'>+1 (972) 464-2823</p>
//               <p className='pthree'>|</p>

//               </div>
//               <div className='d-flex justify-content-end flex-nowrap align-items-center  '>
//               <p className='pone pe-2' >UAE:</p>
//               <p className='ptwo'>+971 058 565-5166</p>
//               <p className='pthree'>|</p>
//               </div>
//               <div className='  d-flex justify-content-center flex-nowrap align-items-center  ' >
//              <p className='pone pe-2' >PAK:</p>
//              <p className='ptwo'> +92 334 7492777 </p>

//              </div>

//       </div>

//       </div>

//     </>
//   )
// }

// export default Navhead

import React from "react";
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
  <div className="container-fluid bar">
      <div className="d-flex justify-content-end align-items-center h-100 ">
       
       
        <p className="d-none d-lg-block d-md-block d-xs-none d-sm-block navthree px-3">
          <span className="navone px-2">USA:</span>
          <span className="navtwo">+1 (972) 464-2823</span>
        
        </p>
   
        <p className="d-none d-lg-block d-md-block d-xs-none d-sm-block mx-3 navthree px-3">
          <span className="navone px-2">UAE:</span>
          <span className="navtwo">+971 058 565-5166</span>
       
        </p>
    
        <p className=" px-3">
          <span className="navone px-2">PAK:</span>
          <span className="navtwo">+92 334 7492777</span>
        </p>
       
        {/* <p className="">
          <span className="">UAE:</span>
          <span className="">+971 058 565-5166</span>
          <span className="">|</span>
        </p>
        <p className="">
          <span className="">PAK:</span>
          <span className=""> +92 334 7492777 </span>
        </p> */}
      </div></div>
   
  );
};

export default Navbar;
