import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import '../Modals/Modal1.css'
function ModalFullscreenExample({isOpen, setIsOpen}) {
 
//  const toggle = () => setIsOpen(!isOpen);
const toggle = () =>{
   setIsOpen(!isOpen)};
  return (
    <div>
      {/* <Button color="danger" onClick={isOpen}>
        Click Me
      </Button> */}
      <Modal  isOpen={isOpen} toggle={isOpen} fullscreen style={{ maxWidth: '100%', maxHeight: '100vh', height: 'auto', marginTop: '17.5vh' }}    backdrop={true} keyboard={true}  >
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody className="p-0 ">
          <div className=" container-fluid pt-3">
            {/* <div className="container"> */}
              <div className="row  g-0 py-5">
                <div className="col-12 col-sm-6 col-md-4 ">
                  <div className="row g-0">
                    <div className="col-3 d-flex justify-content-center">
                      <img
                      style={{width:'37px' , height:'37px'}}
                        className="img-fluid"
                        src="Graphic-Design-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-9 ">
                      <h3 className="pb-3 Modalheading">Graphic Design</h3>
                      <p className='Modalpara'>Web design</p>
                      <p className='Modalpara'>Logo + Visual Identity</p>
                      <p className='Modalpara'>UI/UX Design</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 ">
                  <div className="row g-0">
                    <div className="col-3  d-flex justify-content-center">
                      <img
                      style={{width:'37px' , height:'37px'}}

                        className="img-fluid"
                        src="Web-Development-7.png"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="pb-3 Modalheading">Web Development</h3>

                      <p className='Modalpara'> Wordpress </p>
                      <p className='Modalpara'>Custom CMS</p>
                      <p className='Modalpara'> Drupal</p>
                      <p className='Modalpara'>Squarespace </p>
                      <p className='Modalpara'> Wix</p>
                    </div>
                  </div>
                </div>
                <div className="col-12  col-md-4 ">
                  <div className="row g-0 ">
                    <div className="col-3  d-flex justify-content-center">
                      <img className="img-fluid" src="E-commerce.png" alt="" 
                      style={{width:'37px' , height:'37px'}}
                      
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="pb-3 Modalheading"> E-Commerce </h3>
                      <p className='Modalpara'>Shopify</p>
                      <p className='Modalpara'>WooCommerce</p>
                      <p className='Modalpara'>BigCommerce</p>
                      <p className='Modalpara'> Open Cart</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0  ">
                <div className="col-12 col-sm-6 col-md-4 ">
                  <div className="row g-0">
                    <div className="col-3  d-flex justify-content-center">
                      <img
                      style={{width:'37px' , height:'37px'}}

                        className="img-fluid"
                        src="Mobile-Apps-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-9 ">
                      <h3 className="pb-3 Modalheading"> Mobile Apps</h3>
                      <p className='Modalpara'> IOS</p>
                      <p className='Modalpara'> Android</p>
                      <p className='Modalpara'> Hybrid</p>
                      <p className='Modalpara'> React Native</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="row g-0 g-0">
                    <div className="col-3  d-flex justify-content-center">
                      <img
                      style={{width:'37px' , height:'37px'}}

                        className="img-fluid"
                        src="Product-Development-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="pb-3 Modalheading">Product Development</h3>
                      <p className='Modalpara'> MVP</p>
                      <p className='Modalpara'> Custom Application Development </p>
                      <p className='Modalpara'>Saas Application Development</p>
                      <p className='Modalpara'> Flashing Flights </p>
                      <p className='Modalpara'>Kanbaan </p>
                      <p className='Modalpara'>Umrah Planners</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 ">
                  <div className="row g-0">
                    <div className="col-3  d-flex justify-content-center">
                      <img
                      style={{width:'37px' , height:'37px'}}

                        className="img-fluid"
                        src="Social-Media-Marketing-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="pb-3 Modalheading">Digital Marketing</h3>
                      <p className='Modalpara'> Content Marketing</p>
                      <p className='Modalpara'> Pay Per Click</p>
                      <p className='Modalpara'> Search Engine Optimization</p>
                      <p className='Modalpara'> Social Media Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;
