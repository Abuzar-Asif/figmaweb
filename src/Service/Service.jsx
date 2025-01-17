import React from "react";
import "../Service/Service.css";
const Service = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row container m-auto d-flex justify-content-center align-items-center py-5 ">
          <div className="col-md-3">
            <p className="servicepara spsize">Services</p>
            <h3 className="headingpara">
              Solutions we <br /> provide
            </h3>
          </div>
          <div className="col-md-6">
            <p className="servicepara spsize">You have come to the Right Place PixarsArt is a Unified Platform for all things of Web & Mobile</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center py-2">
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

        <div className="container row m-auto">
          <div className="col-md-4 serviceimg ">
            <img className="serviceimage h-100" src="Creative Design.png" alt="" />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-between align-items-center  ">
            <div className=" d-flex justify-content-between align-items-center servicecontent">
              <h4 className="px-3 Serviceheading">01</h4>
              <h4 className="px-3 Serviceheading">Awesome Creative Design</h4>
              <p className="px-3 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3 serviepara">
                <img src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" d-flex justify-content-between align-items-center servicecontent">
              <h4 className="px-3 Serviceheading">02</h4>
              <h4 className="px-3 Serviceheading">Awesome Creative Design</h4>
              <p className="px-3 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3 serviepara">
                <img src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" d-flex justify-content-between align-items-center servicecontent ">
              <h4 className="px-3 Serviceheading">03</h4>
              <h4 className="px-3 Serviceheading">Awesome Creative Design</h4>
              <p className="px-3 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3 serviepara">
                <img src="arrow.png" alt="" />
              </p>
            </div>
            <div className=" d-flex justify-content-between align-items-center  servicecontent">
              <h4 className=" px-3 Serviceheading">04</h4>
              <h4 className=" px-3 Serviceheading">Awesome Creative Design</h4>
              <p className="px-3 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3 serviepara">
                <img src="arrow.png" alt="" />
              </p>
            </div>

            <div className=" d-flex last justify-content-between align-items-center servicecontent">
              <h4 className="px-3 Serviceheading">05</h4>
              <h4 className="px-3 Serviceheading">Awesome Creative Design</h4>
              <p className="px-3 servicepara">Creative Designs are basic requirement of all businesses. PixarsArt is the right choice for you to initiate this process.</p>
              <p className="px-3 serviepara">
                <img src="arrow.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
