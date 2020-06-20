import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ModalHeader from '../../ModalHeader'

export default function ProtectiveWearModal({ hide=() => {}, data=[] }) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      <Container className="pb-5">
        <Row>
          {data.map(item => (
            <Col xs={12} sm={6} xl={4} key={item.caption} className="pt-5">
              <Card className="h-100">
                <Card.Img style={{ height: item.caption === 'Face Shield' ? 320 : 500} } src={item.img} />
                <Card.Body>
                  <Card.Text>{item.caption}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Modal.Body>
  )
}
