import React from 'react'
import navLOGO from '../images/nav logo desktop.png'
import navICON from '../images/menu icon.png'
import { useRef,useEffect,useCallback } from 'react'


export default function Navbar() {
  const navRef = useRef();
  const overlayRef = useRef();
  const showNavbar = useCallback((event) => {
    event.stopPropagation();
    navRef.current.classList.toggle('responsive_nav');
    overlayRef.current.classList.toggle('show');
  }, []);

  const handleBackgroundClick = useCallback((event) => {
    if (!navRef.current.contains(event.target)) {
      navRef.current.classList.remove('responsive_nav');
      overlayRef.current.classList.remove('show');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleBackgroundClick);
    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, [handleBackgroundClick]);

return (
  <div>
    <div className="navCON">
      <img className="navbarLogo" src={navLOGO} alt="LOGO" />
      <nav className="navLinks" ref={navRef}>
        <a href="/" className="navButt">
          About
        </a>

        <a href="/" className="navButt">
          Services
        </a>

        <a href="/" className="navButt">
          Work
        </a>

        <a href="/" className="navButt">
          Contact
        </a>

        <a href="/" className="navButt navButtS">
          Faq
        </a>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <img style={{ objectFit: 'contain' }} src={navICON} alt="" />
      </button>
    </div>
    <div className="overlay" ref={overlayRef}></div>
  </div>
);
}