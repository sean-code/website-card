import React, { useState } from 'react';
import './navbar.css';



const NavBar = () =>{
    const [isNavOpen, setIsNavOpen] = useState(false);

    function openNav() {
      document.getElementById('mySidenav').style.width = '30%'; //opens side navbar by 50 percent
      document.getElementById('backdrop').style.display = 'block'; //displays overlay
      setIsNavOpen(true);
    }
  
    function closeNav() {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('backdrop').style.display = 'none';
      setIsNavOpen(false);
    }
  
    return (
      <div>
        <div className={`sidenav-container ${isNavOpen ? 'open' : ''}`} id="mySidenav">
          <span className="drawer-close-button">
            <a href="#" className="closebtn" onClick={closeNav}>
              &times;
            </a>
          </span>
          <a href="/" onClick={closeNav} id="home-link">
            Home
          </a>
          <a href="/about" onClick={closeNav} id="about-link">
            About
          </a>
          <a href="#works" onClick={closeNav} id="works-link">
            Shop
          </a>
          <a href="#portfolio" onClick={closeNav} id="contact-link">
            Portfolio
          </a>
          <a href="#contact" onClick={closeNav} id="contact-link">
            Contact
          </a>
        </div>
  
        <div
          className={`backdrop-container ${isNavOpen ? 'open' : ''}`}
          id="backdrop"
          onClick={closeNav}
        />
  
        <nav>
          <span className="mobile-nav-open-icon" onClick={openNav}>
            &#9776;
          </span>
        </nav>
      </div>
    )
}

export default NavBar;