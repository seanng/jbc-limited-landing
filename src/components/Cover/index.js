import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function Cover({ image, title, subheading }) {
  return (
    <div
      className="index-cover-container"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="index-cover-content">
              <h1 className="index-cover-title">
                {title}
              </h1>
              <h3 index-cover-subheading>
                {subheading}
              </h3>
              <Button className="index-cover-contact-button" as={AnchorLink} to="/#contact">
                CONTACT US
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
