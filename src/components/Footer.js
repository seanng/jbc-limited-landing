import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer className="footer has-background-grey-light">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-1">
            <p className="footer-heading">JBC</p>
          </div>
          <div className="column is-2">
            <p className="footer-heading">Quick Links</p>
            <Link to="#about">About Us</Link>
            <Link to="#network">Our Network</Link>
            <Link to="#products">Our Products</Link>
            <Link to="#contact">Contact Us</Link>
          </div>
          <div className="column is-2">
            <p className="footer-heading">Pages</p>
            <Link to="#about">About Us</Link>
            <Link to="#network">Our Network</Link>
            <Link to="#products">Our Products</Link>
            <Link to="#contact">Contact Us</Link>
          </div>
          <div className="column is-2">
            <p className="footer-heading">Legal Stuff</p>
            <Link to="#about">About Us</Link>
            <Link to="#network">Our Network</Link>
            <Link to="#products">Our Products</Link>
            <Link to="#contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
