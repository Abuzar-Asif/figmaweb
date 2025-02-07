import React from 'react'
import './App.css'
import Navhead from './Navbar/Navbar'
import Backgroundimage from './BackgroundImage/Backgroundimage'
import Partners from './Partners/Partners'
import Technology from './Technology/Technology'
import Offer from './Offer/Offer'
import Step from './Step/Step'
// import Brand from './Brands/Brand'
import Client from './Client/Client'
import ChooseUs from './ChooseUs/ChooseUs'
import Hearmore from './Hearmore/Hearmore'
import GetaQuote from './GetaQuote/GetaQuote'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
// import Cards from './Cards/Cards'
import Service from './Service/Service'
import Contactfooter from './Contactfooter/Contactfooter'
import WBrand from './Wbrand/WBrand'
import Rcard from './RCard/Rcard'
// import MarqueAnimation from './Gsapcode'
// import { Routes, Route } from "react-router-dom"; 
import newRoute from './Routes/Route'

import ModalFullscreenExample from './Modals/Modal1'
// import { createPortal } from 'react-dom'
// const mountElement=document.getElementById('overlays')

const App = () => {
  return (
    <>
    {/* <ModalFullscreenExample /> */}
    {/* {
      createPortal(
        <ModalFullscreenExample/>,mountElement

      )
    } */}
{/* <Routes>{newRoute.map((currentvalue,index)=>(
  <Route path={currentvalue.path} 
  element={currentvalue.component}
  key={index}
  />


  ))} */}
 {/* <Routes>
  <Route path='/Service' Component={Service}/>
 </Routes> */}
      <Navhead/>
      <Backgroundimage/>
      <Partners/>
      <Offer/>
      <Technology/>   
      <Service/> 
      <Step/>
      {/* <Brand/> */}
      <WBrand/>
      <Gallery/>  
      <ChooseUs/>
    <Hearmore/>
      <Client/>
      {/* <Cards/> */}
   <Rcard/>
      <GetaQuote/>
{/* <MarqueAnimation/>  */}
      <Footer/>
      <Contactfooter/>
 

      {/* </Routes> */}
    </>
  )
}

export default App
