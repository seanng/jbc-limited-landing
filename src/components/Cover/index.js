import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import CoverVideo from '../../assets/video/cover.mp4'

export default function Cover({ title, subheading }) {
  return (
    <div
      className="index-cover-container"
    >
      <div className="index-cover-video-container">
        <video autoPlay loop muted className="index-cover-video-bg">
          <source
            type="video/mp4"
            alt="HTML5 background video"
            src={CoverVideo}
          />
        </video>
      </div>

      <Container>
        <Row>
          <Col>
            <div className="index-cover-content">
              <h1 className="index-cover-title">{title}</h1>
              <h3 className="index-cover-subheading">{subheading}</h3>
              <Button
                className="index-cover-contact-button"
                as={AnchorLink}
                to="/#contact"
              >
                CONTACT US
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
