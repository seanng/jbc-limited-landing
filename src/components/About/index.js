import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About({ title, description }) {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col>
            <h1 className="index-title">{title}</h1>
            <p className="prewrap text-justify text-grey">{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
