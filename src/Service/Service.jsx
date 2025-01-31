import React from "react";
import "../Service/Service.css";
const Service = () => {
  return (
    <>
      <div className="container-fluid py-5-md">
        <div className="row g-0 container m-auto d-flex justify-content-between align-items-center py-5 ">
          <div className="col-md-4">
            <p className="servicepara spsize">Services</p>
            <h3 className="headingpara">
              Solutions we  provide
            </h3>
          </div>
          <div className="col-md-5">
            <p className=" spsize text-center text-md-start">You have come to the Right Place PixarsArt is a Unified Platform for all things of Web & Mobile</p>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-center align-items-center py-2 servicebutpad">
            <div className="butto centerbutto  text-white">
              <button className="btn ">
                Contact us{" "}
                <span>
                  <img src="arrow.png" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container g-0 row m-auto">
          <div className="col-md-4 serviceimg ">
            <img className="serviceimage " src="Creative Design.png" alt="" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8  d-flex flex-column  align-items-center  ">
          <div className=" line-animated d-flex justify-content-start">
                <span></span>
             </div>
            <div className=" d-flex row g-0 justify-content-between align-items-center servicecontent">
              <h4  className="px-3 col-1 servicecolor  Serviceheading">01</h4>
              <h4 className="px-3 col-4 servicecolor Serviceheading">Awesome <br /> Creative Design</h4>
              <p className="px-5 col-5 servicepara">Creative Designs are basic requirement  of all businesses. PixarsArt is the right  choice for you to initiate this process.</p>
              <p className="px-3 col-2 serviepara d-flex justify-content-end align-items-center">
                <img className='arrowsize' src="arrow.png" alt="" />
              </p>
            
            </div>
            <div className=" line-animated d-flex justify-content-start">
                <span></span>
             </div>
            <div className=" d-flex justify-content-between align-items-center servicecontent">
              <h4 className="px-3 col-1  Serviceheading">02</h4>
              <h4 className="px-3 col-4 Serviceheading">Website Development</h4>
              <p className="px-5  col-5 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3  col-2 serviepara  d-flex justify-content-end align-items-center">
                <img className='arrowsize' src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" line-animated d-flex justify-content-start align-items-start">
                <span></span>
             </div>
            <div className=" d-flex justify-content-between align-items-center servicecontent ">
              <h4 className="px-3  col-1 Serviceheading">03</h4>
              <h4 className="px-3  col-4 Serviceheading">E-commerce Development</h4>
              <p className="px-5  col-5 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3  col-2 serviepara  d-flex justify-content-end align-items-center">
                <img className='arrowsize' src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" line-animated d-flex justify-content-start">
                <span></span>
             </div>
            <div className=" d-flex justify-content-between align-items-center  servicecontent">
              <h4 className=" px-3  col-1 Serviceheading">04</h4>
              <h4 className=" px-3  col-4 Serviceheading">Application Development</h4>
              <p className="px-5  col-5 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3  col-2 serviepara  d-flex justify-content-end align-items-center">
                <img className='arrowsize' src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" line-animated d-flex justify-content-start">
                <span></span>
             </div>
            <div className=" d-flex last justify-content-between align-items-center servicecontent">
              <h4 className="px-3  col-1 Serviceheading">05</h4>
              <h4 className="px-3  col-4 Serviceheading">Cloud Web  <br /> Data Sciences</h4>
              <p className="px-5 col-5  servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3 col-2  serviepara  d-flex justify-content-end align-items-center">
                <img className='arrowsize' src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" line-animated d-flex justify-content-start">
                <span></span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
