import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ModalHeader from '../../ModalHeader'

const getCardImgHeight = (i) => {
  if (i > 7) {
    return 230
  }
  return i > 3 ? 280 : 500;
}

export default function ProtectiveWearModal({ hide=() => {}, data=[] }) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      <Container className="pb-5">
        <Row className="justify-content-center text-center pt-3 pb-3">
          <div className="modal-title-wrapper mt-5">
            <h1 className="index-title">Protective Wear</h1>
          </div>
        </Row>
        <Row>
          {data.map((item, i) => (
            <Col sm={12} md={6} xl={3} key={item.caption} className="pt-5">
              <Card className="h-100">
                <Card.Img
                  style={{ height: getCardImgHeight(i) }}
                  src={item.img}
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
