import React from 'react'
import './Backgroundimage.css'
import '../App.css'
import "aos/dist/aos.css";
const Backgroundimage = () => {
  return (
    <>
    <div className="container-fluid bg-white text-white w-100   m-0 p-0 mountainbg">
      <div className="row g-0  backgroundimg ">
        <div className="col-md-4 col-lg-5 col-xxl-7 d-none d-md-flex  backgrouimg d-flex align-items-center ">
          <img className='backgrouimg' src="Group-2-1 (2).png" alt="" />
        </div>
     
        <div className="col-md-8 col-lg-7 col-xxl-5 bgnav">
          <ul className='backgroundul d-flex justify-content-around align-items-center '>
            <li className='rolling-text1 backroundli px-1'> <span className="leter" style={{animationDelay:'0s'}} > S</span> <span className="leter"  style={{animationDelay:"0.1s"}} > E</span> <span className="leter" style={{animationDelay:"0.2s"}} > R</span> <span className="leter" style={{ animationDelay:'0.3s'}} > V</span> <span className="leter" style={{ animationDelay:'0.4s'}} > I</span> <span className="leter" style={{ animationDelay:'0.5s'}} > C</span> <span className="leter" style={{ animationDelay:'0.6s'}} > E</span> <span className="leter" style={{ animationDelay:'0.7s'}} > S</span>  </li>
            <li className='rolling-text2 backroundli px-1'> <span className="leter" style={{animationDelay:'0s'}} > O</span> <span className="leter"  style={{animationDelay:'0.1s'}} > U</span> <span className="leter" style={{ animationDelay:'0.2s'}} > R</span> <span className="leter" style={{ animationDelay:'0.3s'}} > W  </span><span className="leter" style={{ animationDelay:'0.4s'}} > O</span> <span className="leter" style={{ animationDelay:'0.5s'}} > R</span> <span className="leter" style={{ animationDelay:'0.6s'}} > K</span>  </li>
            <li className='rolling-text3 backroundli px-1'> <span className="leter" style={{ animationDelay:'0s'}} > B</span> <span className="leter" style={{animationDelay:'0.1s'}} > L</span> <span className="leter" style={{ animationDelay:'0.2s'}} > O</span> <span className="leter" style={{ animationDelay:'0.3s'}} > G</span>  </li>
            <li className='rolling-text4 backroundli px-1'> <span className="leter" style={{ animationDelay:'0s'}} > C</span> <span className="leter" style={{animationDelay:'0.1s'}} > A</span> <span className="leter" style={{ animationDelay:'0.2s'}} > R</span> <span className="leter" style={{ animationDelay:'0.3s'}} > E</span> <span className="leter" style={{ animationDelay:'0.4s'}} > E</span> <span className="leter" style={{ animationDelay:'0.5s'}} > R</span> <span className="leter" style={{ animationDelay:'0.6s'}} > S</span>  </li>
            <li className='rolling-text5 backroundli px-1'> <span className="leter" style={{ animationDelay:'0s'}} > C</span> <span className="leter" style={{animationDelay:'0.1s'}} > O</span> <span className="leter" style={{ animationDelay:'0.2s'}} > N</span> <span className="leter" style={{ animationDelay:'0.3s'}} > T</span> <span className="leter" style={{ animationDelay:'0.4s'}} > A</span> <span className="leter" style={{ animationDelay:'0.5s'}} > C</span> <span className="leter" style={{ animationDelay:'0.6s'}} > T</span> <span className="leter" style={{ animationDelay:'0.7s'}} >U  </span> <span className="leter" style={{ animationDelay:'0.8s'}} > S</span> </li>
            <li className='rolling-text6 backroundli px-1'><img src="arrow.png" alt="" /></li>
            <li className='rolling-text7 backroundli px-1'> <img src="arrow.png" alt="" /></li>
          </ul>
        </div>
        <div className="col-12 h-75 d-flex flex-column justify-content-center">
          <h3 className='ps-5 digitalheading'>
            WE'RE THE DIGITAL
          </h3>
          <h1 className=' ps-5  Artists'>
            ARTISTS
          </h1>
        </div>
      </div>
       
  

    </div>
      
    </>
  )
}

export default Backgroundimage
