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

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div>
      <p className="">
        <span className="">USA:</span>
        <span className="">+1 (972) 464-2823</span>
        <span className="">|</span>
      </p>
      <p className=" ">
        <span className="">UAE:</span>
        <span className="">+971 058 565-5166</span>
     <span className="">|</span>
      </p>
      <p className="   ">
        <span className="">PAK:</span>
        <span className=""> +92 334 7492777 </span>
      </p>
      </div>
    </div>
  );
};

export default Navbar;
