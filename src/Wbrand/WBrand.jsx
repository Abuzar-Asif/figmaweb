import React, { useEffect } from "react";
import "../Wbrand/WBrand.css";
import Aos from 'aos';
import "aos/dist/aos.css";
const WBrand = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  })
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 py-5">
              <p className="WBrandpara" 
              data-aos='fade-down'
              
              >International Brands</p>
              <h3 className="Wbrandheading"
              data-aos='fade-down'
              
              >
                We're happy to work with global <br /> largest brands
              </h3>
            </div>
          </div>
          <div className="row g-0 d-flex justify-content-center align-items-center ">
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Rectangle 1628.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight">
              {" "}
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Rectangle 1625.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight bright">
              {" "}
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Group 10554.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Rectangle 1638.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Group.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight bright">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="BBC 1.png"
                alt=""
              />
            </div>
            <div className="col-12  d-flex justify-content-center align-items-center bwidth wheight  blast">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Pixie Cup 1.png"
                alt=""
              />
            </div>
          </div>
          <div className="row g-0 d-flex justify-content-center align-items-center ">
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight Bbottom">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Group (1).png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight Bbottom">
              {" "}
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Hyp Rov.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight Bbottom bright">
              {" "}
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Margot 1.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight Bbottom">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="World Economic Forum 1.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight Bbottom">
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Rectangle 1726.png"
                alt=""
              />
            </div>
            <div className="col-6 col-sm-4 d-flex justify-content-center align-items-center bwidth wheight Bbottom bright">
              {" "}
              <img
              data-aos='fade-down'

                className="img-fluid p-2 blendluminosity"
                src="Art Hyve 1.png"
                alt=""
              />
            </div>
            <div className="col-12  d-flex justify-content-center align-items-center bwidth wheight blast Bbottom last">
              {" "}
              <img
              data-aos='fade-down'
                className="img-fluid p-2 blendluminosity "
                src="Standford University 1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WBrand;
