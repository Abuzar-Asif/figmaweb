import React from "react";
import "../Contactfooter/Contactfooter.css";
const Contactfooter = () => {
  return (
    <>
      <div className="container-fluid  contactfooterposition">
        <div className=" row g-0 d-flex justify-content-between ">
          <div className="col-6"></div>
          <div className="col-md-6 contactfooterimage"></div>
        </div>
    

      {/* <div className="container-fluid"> */}
        <div className=" contactfooterrow bg-black text-white container g-0 row m-auto">
          <div className=" col-md-9 contactfooterform  d-flex flex-wrap justify-content-between align-items-center  ">
         
          <div className="col-md-10 m-auto contactfooterform  d-flex flex-wrap justify-content-between align-items-center">
           
            <div className=" col-md-5 coldisplay pt-5">
              <p className="contactfooterpara2 pt-5">We are a fast growing full scale digital agency with multiple Certifications and Partnerships. Our team is proud to be featured in multiple publications globally.</p>
            </div>
            <div className="col-md-3 coldisplay px-3 pt-5 ">
              <h3 className="contactfooterheading">Information</h3>
              <p className="contactfooterpara">About Company <br /> Services <br /> Our Careers <br /> Blogs <br /> Contact Us</p>
            </div>
            <div className="col-md-3 px-3 coldisplay pt-4">
              <h3 className="contactfooterheading contactus">Contact Us</h3>
              <p className="contactfooterpara">100 N Howard St STE R, Spokane, Washington, 99201-0508, United States
                <br />
                info@pixarsart.com
              </p>
            </div>

            <div className="col-md-12 coldisplay py-5">
              <img src="facebook.png" className="contactimage" alt="" />
            </div>
            </div>
            <div className="col-md-12 footerrightsborder  d-flex justify-content-between align-items-center">
             <div className="col-10 m-auto d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <p className="rightspara">
                  All Rights Reserved © 2021, Design & <br />
                  Developed By: Pixarsart
                </p>
              </div>
              <div className="col-12 col-md-6 formclassfooter d-flex justify-content-center align-items-center my-3">
                <input type="text" className="form-control-md formfooter " placeholder="Enter your email" />{" "}
                <span>
                  <img src="formarrow.png" alt="" />
                </span>
              </div>
              </div>
            </div>
          </div>
         
          <div className="col-md-3 d-flex justify-content-center align-items-center flex-column footerbutton">
            <div>
              <h3 className="contactfooterheading py-3">Have Project in your mind</h3>
            </div>
            <div>
              <div className=" butto  text-white">
                <button className="btn ">
                  Contact Us{" "}
                  <span>
                    <img src="arrow.png" alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="contactfooterheading pt-4">02:00 PM - 11:00 PM</h3>
              <p className="contactfooterpara text-center">Monday - Friday</p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Contactfooter;
