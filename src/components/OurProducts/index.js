import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

export default function OurProducts({ title, description, categories }) {
  return (
    <section id="products">
      <Container>
        <Row className="index-product-introduction">
          <Col>
            <h1 className="index-title">{title}</h1>
            <p className="prewrap text-justify text-grey">{description}</p>
          </Col>
        </Row>
        <TabContainer
          id="product-categories-tab-container"
          defaultActiveKey={categories[0].label}
        >
          <Row>
            <Col>
              <Nav justify variant="pills" className="border-bottom-grey">
                {categories.map(({ label }) => (
                  <Nav.Item key={label}>
                    <Nav.Link className="index-product-tab" eventKey={label}>
                      {/* picture */}
                      {label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <TabContent>
            {categories.map(({ label, images }) => (
              <TabPane key={label} eventKey={label} className="index-product-tab-pane">
                <Row>
                  <Col>
                    <Carousel controls={false}>
                      {images.map(({ source }) => (
                        <Carousel.Item>
                          <PreviewCompatibleImage
                            key={source.childImageSharp.fluid.src}
                            imageInfo={source}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Col>
                  <Col>{label}</Col>
                </Row>
              </TabPane>
            ))}
          </TabContent>
        </TabContainer>
      </Container>
    </section>
  );
}
