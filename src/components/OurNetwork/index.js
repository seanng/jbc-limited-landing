import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

export default function OurNetwork({ title, description, image }) {
  return (
    <section id="network" className="bg-light-grey">
      <Container>
        <Row className="index-network-content-wrapper">
          <Col>
            <h1 className="index-title text-center">{title}</h1>
            <p className="prewrap text-center text-grey">{description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <PreviewCompatibleImage imageInfo={image} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
