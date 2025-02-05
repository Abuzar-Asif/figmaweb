import React from "react";
import "../App";
import Navhead from "../Navbar/Navbar";
import Backgroundimage from "../BackgroundImage/Backgroundimage";
import Partners from "../Partners/Partners";
import Technology from "../Technology/Technology";
import Offer from "../Offer/Offer";
import Step from "../Step/Step";
import Client from "../Client/Client";
import ChooseUs from "../ChooseUs/ChooseUs";
import Hearmore from "../Hearmore/Hearmore";
import GetaQuote from "../GetaQuote/GetaQuote";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

import Contactfooter from "../Contactfooter/Contactfooter";
import WBrand from "../Wbrand/WBrand";
import Rcard from "../RCard/Rcard";
import Service from "../Service/Service";
const newRoute = [
      
        { path:"/Navhead",  component:<Navhead />},
        { path:"/Backgroundimage",   component:<Backgroundimage />},
        { path:"/Partners",   component:<Partners />},
        { path:"/Offer" ,  component:<Offer />},
        { path:"/Technology",   component:<Technology />},
        { path:"/Service" ,  component:<Service />},
        { path:"/Step" ,  component:<Step />},
        { path:"/WBrand" ,  component:<WBrand />},
        { path:"/Gallery"  , component:<Gallery />},
        { path:"/ChooseUs"  , component:<ChooseUs />},
        { path:"/Hearmore" ,  component:<Hearmore />},
        { path:"/Client" ,  component:<Client />},
        { path:"/Rcard",   component:<Rcard />},
        { path:"/GetaQuote" ,  component:<GetaQuote />},
        { path:"/Footer" ,  component:<Footer />},
        { path:"/Contactfooter " ,  component:<Contactfooter />},
      
]
export default newRoute ;
