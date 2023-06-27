import React from 'react'
import navLOGO from '../images/nav logo desktop.png'
import navICON from '../images/menu icon.png'
import { useRef } from 'react'


export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    // var blur = document.getElementById('blur');
    // blur.classList.toggle('active')
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div>
      <div className='navCON'>
        <img className='navbarLogo' src={navLOGO} alt="LOGO" />
        <nav className='navLinks' ref={navRef}>
          <a href="/" className='navButt'>About</a>
        
          <a href="/" className='navButt'>Services</a>
      
          <a href="/" className='navButt'>Work</a>

          <a href="/" className='navButt'>Contact</a>
        
          <a href="/" className='navButt navButtS'>Faq</a>
          {/* <button className='nav-btn nav-close-btn' onClick={showNavbar} >
          <img src={navICON} alt="" />
        </button> */}
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavbar} >
          <img style={{objectFit: 'contain'}} src={navICON} alt="" />
        </button>
      </div>
    </div>
  )
}

