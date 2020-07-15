/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// eslint-disable-next-line import/no-extraneous-dependencies

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const [validationMessage, setValidationMessage] = useState('');
  const [isValidationError, setIsValidationError] = useState(false)
  const [isValidated, setIsValidated] = useState(false);
  const [val, setVal] = useState({
    'product-category': 'Personal Protective Equipment',
  });
  const handleChange = e => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('val: ', val)
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setIsValidationError(true);
      setValidationMessage(`Please fill out all fields correctly.`);
      setIsValidated(true);
      return;
    }
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...val,
        }),
      });
      setIsValidationError(false);
      setValidationMessage(`Thank you for your message, ${val.name}!`);
      setIsValidated(false);
    } catch (error) {
      setIsValidationError(true);
      setValidationMessage(
        `Sorry there was an error submitting your message. \n \n Error Code: ${error.status}`
      );
      setIsValidated(false);
    }
  };

  return (
    <section id="contact" className="bg-light-grey">
      <Container>
        <Row className="index-contact-introduction">
          <Col>
            <h1 className="index-title">Contact Us</h1>
            <p className="text-grey text-center">
              Tell us how we can help you!
            </p>
          </Col>
        </Row>
        <Form
          noValidate
          name={val['product-category']}
          validated={isValidated}
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <Row>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Which product are you interested in?</Form.Label>
              <Form.Control
                required
                as="select"
                name="product-category"
                onChange={handleChange}
                type="text"
              >
                <option>Personal Protective Equipment</option>
                <option>Seafood</option>
                <option>Durian</option>
                <option>Others</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="pt-2">
            <Form.Group as={Col} sm={5}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                name="email"
                onChange={handleChange}
                type="email"
              />
            </Form.Group>
            <Col sm={2} />
            <Form.Group as={Col} sm={5}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="pt-2">
            <Form.Group as={Col} sm={5}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                onChange={handleChange}
                type="tel"
              />
            </Form.Group>
            <Col sm={2} />
            <Form.Group as={Col} sm={5}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="pt-2">
            <Form.Group as={Col}>
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                name="message"
                as="textarea"
                rows="5"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col sm={7} style={{ color: isValidationError ? 'red' : 'green' }}>
              {validationMessage}
            </Col>
            <Col sm={5} className="text-right">
              <Button className="index-contact-submit-button" type="submit">
                SUBMIT
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
