import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Footer() {
  return (
    <footer className="bg-dark-grey">
      <Container>
        <Row>
          <p>Copyright© 2020 JBC Limited. All Rights Reserved. </p>
        </Row>
      </Container>
    </footer>
  );
}
