import React from "react";
import "../GetinTouch/GetinTouch.css";
import GetaQuote from "../GetaQuote/GetaQuote.jsx";
import Footer from "../Footer/Footer";
import Contactfooter from "../Contactfooter/Contactfooter";

const GetinTouch = () => {
  return (
    <>
      <div className="container-fluid pt-5">
          <div className="row g-0 GTHeight py-5">
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
              <h1 className="gtheading">Get In Touch</h1>
            </div>
            <div className="col-12  col-md-6 d-flex justify-content-center justify-content-md-start  align-items-center">
              <p  className="gtpara ">
                We’re a team of creatives who are excited about unique <br /> ideas and
                help companies to create amazing identity <br /> by crafting top-notch
                digital solutions.
              </p>
            </div>
          </div>
          <div className="row g-0 py-5">
            <div className="col-12 col-md-5">
            <h3 className="gth3">USA </h3> 
<p className="gtspara"> <span className="bordergt"> (469) 781-8845  </span></p>
<p className="gtspara"> Suite 220, 555 republic drive, Plano, Taxes. USA 75074</p>
<h3 className="gth3">UAE </h3> 
<p className="gtspara"> Ground Floor, Building 16, Dubai Internet City,</p>
<p className="gtspara"> Dubai. United Arab Emirates</p>
<p className="gtspara"> Licence #: 102808</p>
<p className="gtspara"> 
<span className="bordergt"> (971) 58 - 565 - 5166 </span>
    </p>
<h3 className="gth3">Asia </h3> 
<p className="gtspara"> NICHS 2, Lahore, Pakistan</p>
<p className="gtspara">
<span className="bordergt"> (0334) 749 - 2777 </span>
    </p>
<p className="gtspara"> 
<span className="bordergt">info@pixarsart.com</span>
    </p>
            </div>
            <div className="col-12 col-md-7">
             <div className="row  gtborderdown g-0">
                <div className="col-12 col-md-6"><input class="bgremoveinput form-control form-control-lg" type="text" placeholder="Name*"/></div>
             
                <div className="col-12 col-md-6"><input class="bgremoveinput form-control form-control-lg" type="text" placeholder="Email*"/></div>
                </div>
                <div className="row gtborderdown g-0">
                <div className="col-12 col-md-6"><input class="bgremoveinput form-control form-control-lg" type="text" placeholder="Phone"/></div>
           
               
             <div className="col-12 col-md-6"><input class="bgremoveinput form-control form-control-lg" type="text" placeholder="Subject"/></div>
                </div>
                <div className="row gtborderdown g-0">
                <div className="col-12">
                <textarea class="bgremoveinput form-control form-control-lg" type="text" rows={3} placeholder="Message"/>
                </div>
            
             </div>

            </div>
          </div>
      </div>
    <GetaQuote/>
    <Footer/>
    <Contactfooter/>
      
    </>
  );
};

export default GetinTouch;
