import React, { useState, useEffect } from 'react';
import jm1 from '../images/jm1.png'
import jm2 from '../images/jm2.png'
import jm3 from '../images/jm3.png'
import car2one from '../images/car2one.png'
import car2two from '../images/car2two.png'

const images= [
    jm1,
    jm2,
    jm3
]
const images2 =[
    car2one,
    car2two,
    car2one
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
        <div className="rwHeading" style={{color: '#E1D9C7'}}><h3>Our Recent Work</h3></div>
        <a target='_blank' rel='noreferrer' style={{textDecoration:'none'}} href="https://jm-seven-fawn.vercel.app/">
        <div className='carCover'>
          <div className="carousel">
            <img className='img' src={images[currentIndex]} alt="Carousel" />
          </div>
          <h5 style={{color: "#818181", fontSize: "13px",fontFamily: 'Inter',fontWeight:'400',marginTop:'7px'}}>Click to view the live website</h5>
        </div>
      </a>  
        <div className='carCover'>
          <div className="carousel">
            <img className='img' style={{borderRadius:'13px'}} src={images2[currentIndex]} alt="Carousel " />
          </div>
          <h5 style={{color: "#818181", fontSize: "13px",fontFamily: 'Inter',fontWeight:'400', marginTop:'7px'}}>You are viewing this website :)</h5>
        </div>
      </div>
    </>
  )
}

export default RecentWork