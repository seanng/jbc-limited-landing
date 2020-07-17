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
  const [item, setItem] = useState({
    label: '',
    sections: [{ content: [{}] }],
    map: 'map goes here',
  });

  const hide = useCallback(() => setIsModalShown(false), []);

  const handleThumbnailClick = dataItem => () => {
    setItem(dataItem);
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
          {data.map(dataItem => (
            <Col
              xs={12}
              md={6}
              xl={4}
              className="d-flex justify-content-center"
            >
              <div
                onClick={handleThumbnailClick(dataItem)}
                className="text-white text-center pt-4 rounded mb-5"
                style={{
                  height: '320px',
                  width: '320px',
                  backgroundImage: `url("${dataItem.thumbnail}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  fontWeight: 600,
                  fontSize: 26,
                  cursor: 'pointer',
                }}
              >
                {dataItem.label}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={isModalShown} onHide={hide} size="xl">
        <Modal.Body>
          <ModalHeader hide={hide} />
          <Container>
            {item.sections.map(({ content, title }) => (
              <>
                <Row className="justify-content-center text-center pt-3 pb-3">
                  <div className="modal-title-wrapper mt-5">
                    <h1 className="index-title">{title || item.label}</h1>
                  </div>
                </Row>
                <Row className="justify-content-center">
                  {content.map(form => (
                    <Col xs={12} sm={6} xl={4} key={form.caption}>
                      <Card className="mt-5" style={{ borderWidth: 0 }}>
                        <Card.Img src={form.img} />
                        {form.caption && (
                          <Card.Body>
                            <Card.Text
                              style={{
                                fontSize: 20,
                                textAlign: 'left',
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {form.caption}
                            </Card.Text>
                          </Card.Body>
                        )}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            ))}
            <Row>
              <Col>
                <Card.Img src={item.map} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
