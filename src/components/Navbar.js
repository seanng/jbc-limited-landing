/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
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
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </Link>
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
            <Link className="navbar-item" to="#about">
              About Us
            </Link>
            <Link className="navbar-item" to="#products">
              Our Products
            </Link>
            <Link className="navbar-item" to="#network">
              Our Network
            </Link>
            <Link className="navbar-item" to="#contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Navbar
