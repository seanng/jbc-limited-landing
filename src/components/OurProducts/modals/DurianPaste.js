import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ModalHeader from '../../ModalHeader';

export default function DurianPasteModal({ hide, data, description, label }) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      <Container className="pb-5">
        <Row className="justify-content-center text-center pb-3">
          <div className="modal-title-wrapper mt-2">
            <h1 className="index-title">{label}</h1>
          </div>
        </Row>
        <Row className="pt-4">
          <Col sm={{ span: 8, offset: 2 }}>
            <p
              style={{ fontSize: 22 }}
              className="prewrap text-justify text-grey"
            >
              {description}
            </p>
          </Col>
        </Row>
        <Row>
          {data.map(item => (
            <Col
              xs={12}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
              key={item.caption}
              className="pt-5 d-flex justify-content-center"
            >
              <Card className="h-100">
                <Card.Img
                  src={item.img}
                  style={{ height: 300, objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Text>{item.caption}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Modal.Body>
  );
}
