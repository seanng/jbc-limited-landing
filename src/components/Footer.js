import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
            <AnchorLink to="/#about">About Us</AnchorLink>
            <AnchorLink to="/#network">Our Network</AnchorLink>
            <AnchorLink to="/#products">Our Products</AnchorLink>
            <AnchorLink to="/#contact">Contact Us</AnchorLink>
          </div>
          <div className="column is-2">
            <p className="footer-heading">Pages</p>
            <AnchorLink to="/#about">About Us</AnchorLink>
            <AnchorLink to="/#network">Our Network</AnchorLink>
            <AnchorLink to="/#products">Our Products</AnchorLink>
            <AnchorLink to="/#contact">Contact Us</AnchorLink>
          </div>
          <div className="column is-2">
            <p className="footer-heading">Legal Stuff</p>
            <AnchorLink to="/#about">About Us</AnchorLink>
            <AnchorLink to="/#network">Our Network</AnchorLink>
            <AnchorLink to="/#products">Our Products</AnchorLink>
            <AnchorLink to="/#contact">Contact Us</AnchorLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
