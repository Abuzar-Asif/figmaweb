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
const App = () => {
  return (
    <>
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
 
      <Footer/>
      <Contactfooter/>

    </>
  )
}

export default App
