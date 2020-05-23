/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import BsNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import useHideOnScroll from '../hooks/useHideOnScroll';
import logo from '../assets/img/logo.svg';

const NAVBAR_HEIGHT = 80;

const LINKS = [
  { key: 'about', label: 'About Us' },
  { key: 'network', label: 'Our Network' },
  { key: 'products', label: 'Our Products' },
  { key: 'contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [selectedKey, setSelectedKey] = useState('');


  return (
    <BsNavbar sticky="top" collapseOnSelect expand="lg">
      <Container>
        <BsNavbar.Brand href="">
          <img src={logo} alt="Kaldi" style={{ width: '120px' }} />
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BsNavbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end">
            {LINKS.map(link => (
              <Nav.Item
                key={link.key}
                onClick={() => {
                  setSelectedKey(link.key);
                }}
              >
                <Nav.Link
                  className={selectedKey === link.key ? 'is-active' : ''}
                  as={AnchorLink}
                  to={`/#${link.key}`}
                >
                  {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
