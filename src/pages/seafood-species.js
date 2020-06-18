/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Layout from '../components/Layout';
import ModalHeader from '../components/ModalHeader';
import data from '../data/seafood-species';

export default function SeafoodSpecies() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [content, setContent] = useState({
    map: 'map goes here',
    forms: [],
  });

  const hide = useCallback(() => setIsModalShown(false), []);

  const handleThumbnailClick = item => () => {
    setContent(item.content);
    setIsModalShown(true);
  };

  return (
    <Layout>
      <Container className="pt-5 mt-4">
        <Row className="pb-5">
          <Col>
            <h1 className="index-title">Species</h1>
          </Col>
        </Row>
        <Row>
          {data.map(item => (
            <Col
              xs={12}
              md={6}
              xl={4}
              className="d-flex justify-content-center"
            >
              <div
                onClick={handleThumbnailClick(item)}
                className="text-white text-center pt-4 rounded mb-5"
                style={{
                  height: '320px',
                  width: '320px',
                  backgroundImage: `url("${item.thumbnail}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  fontWeight: 600,
                  fontSize: 26,
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={isModalShown} onHide={hide} size="xl">
        <Modal.Body>
          <ModalHeader hide={hide} />
          <Container>
            <Row className="justify-content-center text-center pt-3 pb-3">
              <div className="modal-title-wrapper">
                <h1 className="index-title">Product Forms</h1>
              </div>
            </Row>
            <Row className="justify-content-center text-center">
            {content.forms.map((form) => (
              <Col xs={12} sm={6} xl={4} key={form.caption}>
                <Card className="mt-5 mb-">
                  <Card.Img src={form.img} />
                  <Card.Body>
                    <Card.Text>{form.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            </Row>
            <Row><Col><Card.Img src={content.map} /></Col></Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
