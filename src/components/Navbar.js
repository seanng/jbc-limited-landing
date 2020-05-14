/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import logo from '../img/logo.svg'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')

  const toggleHamburger = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (isActive) {
      setNavBarActiveClass('is-active');
    } else {
      setNavBarActiveClass('');
    }
  }, [isActive]);  
  
  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: '100px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '182px' }} />
          </a>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-end has-text-centered">
            <a className="navbar-item" href="#about">
              About Us
            </a>
            <a className="navbar-item" href="#network">
              Our Network
            </a>
            <a className="navbar-item" href="#products">
              Our Products
            </a>
            <a className="navbar-item" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Navbar
