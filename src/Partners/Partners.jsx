// import React from 'react'
// import './Partners.css'
// import '../App.css'
// const Partners = () => {
//   return (
//     <>
//     <div className="container-fluid maincontainer py-5 ">
//     <div className="container m-auto  py-5  ">
//       <div className='d-flex row  '>

//            <div  className=' col-12 col-sm-3 partnerssdisplay'>
//             <p className='partnerss  '>

//             Partners & <br /> Certification
//             </p>
//            </div>
//            <div className=' col-12 col-sm-9 d-flex justify-content-center align-items-center flex-wrap '>
//                   <div className='widthclass col-auto' > <img className='widthofimage' width={'86px'} height={'56px'}  src="Wordpress.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'64px'} height={'37px'} src="AWS.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'134px'} height={'35px'} src="toddbailey.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'116px'} height={'43px'} src="GooglePartner.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage5' width={'28px'} height={'64px'} src="Tree.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'127px'} height={'35px'} src="Shopify.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'92px'} height={'43px'} src="SquareSpace.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'138px'} height={'32px'} src="Discipline.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'103px'} height={'24px'} src="Elfamoso.png" alt="" /></div>
//                   <div className='widthclass col-auto'> <img  className='widthofimage' width={'59px'} height={'23px'} src="WIX.png" alt="" /></div>
//            </div>
//       </div>

//       </div>
//     </div>

//     </>
//   )
// }

// export default Partners

import React from "react";
import "../Partners/Partners.css";
const Partners = () => {
  return (
    <>
    <div className="container-fluid py-md-5">

      <div className="container py-md-5 m-auto">
        <div className="row g-0">
          <div className="col-12 col-lg-3 bg-black text-white px-2">
            <h4 className="partnerss  ">
              Partners & <br /> Certifications
            </h4>
          </div>
          <div className="col-12 col-sm-12    col-lg-9 ">
            {/* <div className="row   row-cols-5 flex-wrap">
              <div className="column col-6  d-flex justify-content-center align-items-center">
                <img src="Wordpress.png" alt="" />
              </div>
              <div className="column col-6  d-flex justify-content-center align-items-center">
                <img src="AWS.png" alt="" />
              </div>
              <div className="column  col-6   d-flex justify-content-center align-items-center">
                <img src="toddbailey.png" alt="" />
              </div>
              <div className="column col-6 d-flex justify-content-center align-items-center">
                <img src="GooglePartner.png" alt="" />
              </div>
              <div className="column  col-12   d-flex justify-content-center align-items-center">
                <img src="Tree.png" alt="" />
              </div>
              
            </div> */}
            {/* <div className="row  g-0 row-cols-1 row-cols-sm-2 row-cols-lg-5 flex-wrap"> */}
            <div className="row  g-0  row-cols-lg-5 flex-wrap">
              <div    className="column col-xs-12 col-sm-6 col-lg-6   d-flex justify-content-center align-items-center">
                <img  width={'86px'} height={'56px'}  src="Wordpress.png" alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-6 col-lg-6   d-flex justify-content-center align-items-center">
                <img width={'64px'} height={'37px'}  src="AWS.png" alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-6 col-lg-6   d-flex justify-content-center align-items-center">
                <img width={'134px'} height={'35px'}  src="toddbailey.png" alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-6 col-lg-6  d-flex justify-content-center align-items-center">
                <img width={'116px'} height={'43px'}  src="GooglePartner.png" alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-12 col-lg-6      d-flex justify-content-center align-items-center">
                <img width={'28px'} height={'64px'}  src="Tree.png" alt="" />
              </div>
              
            
         
              <div    className="column col-xs-12 col-sm-6 col-lg-6 col--xxl d-flex justify-content-center align-items-center">
                <img width={'127px'} height={'35px'}   src="Shopify.png" alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-6 col-lg-6 col--xxl  d-flex justify-content-center align-items-center">
                <img width={'92px'} height={'43px'}    src="SquareSpace.png" alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-6 col-lg-6 col--xxl   d-flex justify-content-center align-items-center">
                <img width={'138px'} height={'32px'}   src="Discipline.png"  alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-6  col-lg-6 col--xxl d-flex justify-content-center align-items-center">
                <img  width={'103px'} height={'24px'}   src="Elfamoso.png"  alt="" />
              </div>
              <div    className="column col-xs-12 col-sm-12 col-lg-6  col--xxl   d-flex justify-content-center align-items-center">
                <img   width={'59px'} height={'23px'}  src="WIX.png"  alt="" />
              </div>
              </div>
            
    
          </div>
        </div>
    </div>

      </div>
    </>
  );
};

export default Partners;
