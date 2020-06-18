import React, { useState, useCallback } from 'react';
import { navigate } from "gatsby"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import SubCatModal from './SubCatModal'
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import data from './data';

export default function OurProducts({ title, description, categories = [] }) {
  const [isModalShown, setIsModalShown] = useState(false)
  const [modalData, setModalData] = useState([])

  const hide = useCallback(() => setIsModalShown(false), [])

  const handleSubcatLabelClick = (subcat) => () => {
    if (subcat.page) {
      navigate(subcat.page)
    } else {
      setModalData(subcat.data)
      setIsModalShown(true)
    }
  }

  return (
    <section id="products">
      <Container>
        <Row className="index-product-introduction">
          <Col>
            <h1 className="index-title">{title}</h1>
          </Col>
        </Row>
        <TabContainer
          id="product-categories-tab-container"
          defaultActiveKey={0}
        >
          <Row>
            <Col>
              <Nav justify variant="pills" className="border-bottom-grey">
                {categories.map(({ label, thumbnail }, idx) => (
                  <Nav.Item key={label}>
                    <Nav.Link className="index-product-tab" eventKey={idx}>
                      <div className="index-product-tab-thumbnail-wrapper">
                        <PreviewCompatibleImage
                          width="80%"
                          imageInfo={thumbnail}
                        />
                      </div>
                      {label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <TabContent>
            {categories.map(({ label, images, description: desc }, idx) => (
              <TabPane
                key={label}
                eventKey={idx}
                className="index-product-tab-pane"
              >
                <Row>
                  <Col xs={12}>
                    <p className="prewrap text-justify text-grey pb-5">{desc}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={5}>
                    <Carousel controls={false}>
                      {images.map(({ source, name }) => (
                        <Carousel.Item key={name} className="index-product-carousel-img">
                          <PreviewCompatibleImage imageInfo={source} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Col>
                  <Col xs={12} sm={{ span: 6, offset: 1}}>
                    { data[label].map(subcat => (
                      <div key={subcat.label}>
                        <Button className="index-product-subcat-label" onClick={handleSubcatLabelClick(subcat)} variant="link" key={subcat.label}>{subcat.label}</Button>
                      </div>
                    )) }
                  </Col>
                </Row>
              </TabPane>
            ))}
          </TabContent>
        </TabContainer>
      </Container>
      <SubCatModal show={isModalShown} onHide={hide} data={modalData} />
    </section>
  );
}
