import React, { useState, useEffect } from 'react';
import jm1 from '../images/jm1.png'
import jm2 from '../images/jm2.png'
import jm3 from '../images/jm3.png'
import q1 from '../images/p desktop.png'
import q2 from '../images/p2 desktop.png'
import q3 from '../images/q3 desktop.png'

const images= [
    jm1,
    jm2,
    jm3
]
const images2 =[
    q1,
    q2,
    q3
]

const RecentWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="rwCover" id='work'>
        <div className="rwHeading" style={{color: '#E1D9C7'}}>Our Recent Work</div>
        <div className='outerCar'>
        <a target='_blank' rel='noreferrer' style={{textDecoration:'none'}} href="https://www.jagritimalhotra.com">
        <div className='carCover'>
          <div className="carousel">
            <img className='img' src={images[currentIndex]} alt="Carousel" />
          </div>
          <h5 style={{color: "#818181", fontSize: "13px",fontFamily: 'Inter',fontWeight:'400',marginTop:'7px'}}>Click to view the live website</h5>
        </div>
      </a>  
      <a style={{textDecoration:'none'}} href="https://my-app-six-inky.vercel.app/">
        <div className='carCover'>
          <div className="carousel">
            <img className='img' style={{borderRadius:'13px'}} src={images2[currentIndex]} alt="Carousel " />
          </div>
          <h5 style={{color: "#818181", fontSize: "13px",fontFamily: 'Inter',fontWeight:'400', marginTop:'7px',textDecoration:'none'}}>Click to view the live website</h5>
        </div>
        </a>
        </div>
      </div>
    </>
  )
}

export default RecentWork