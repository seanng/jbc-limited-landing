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
  const [validationMessage, setValidationMessage] = useState('')
  const [isValidationShown, setIsValidationShown] = useState(false);
  const [isValidated, setIsValidated] = useState(false)
  const [val, setVal] = useState({ isValidated: false });
  const handleChange = e => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsValidated(true);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...val,
      }),
    })
      .then(() => {
        setValidationMessage(`Thank you for your message, ${val.name}!`)
        setIsValidationShown(true)
        setIsValidated(false);
      })
      .catch(error => {
        setValidationMessage(`Sorry there was an error submitting your message. \n \n Error Code: ${error.status}`);
        setIsValidationShown(true);
        setIsValidated(false);
      });
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
            <Form.Group controlId="name" as={Col} sm={5}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
            <Col sm={2} />
            <Form.Group controlId="number" as={Col} sm={5}>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="number"
                onChange={handleChange}
                type="tel"
                width="80%"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="email" as={Col} sm={5}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                name="email"
                onChange={handleChange}
                type="email"
                width="80%"
              />
            </Form.Group>
            <Col />
          </Row>
          <Row>
            <Form.Group controlId="exampleForm.ControlTextarea1" as={Col}>
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
            <Col sm={7}>{isValidationShown && validationMessage}</Col>
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
