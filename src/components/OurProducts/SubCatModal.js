import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ModalHeader from '../ModalHeader'


export default function SubCatModal({ show, onHide, data }) {
  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Body>
        <ModalHeader hide={onHide} />
        <Container className="pb-5">
          <Row>
            {data.map(item => (
              <Col xs={12} sm={6} xl={4} key={item.caption}>
                <Card className="mt-5 mb-">
                  <Card.Img src={item.img} />
                  <Card.Body>
                    <Card.Text>{item.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}
