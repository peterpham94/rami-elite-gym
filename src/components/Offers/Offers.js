import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Offer.css'; // Import the CSS file

const Offers = () => {
  return (
    <Container fluid className="offers-container">
      <Row>
        <Col md={4}>
            <div className="text-center">
                <h1 className="text-white">Online Exclusive Offer</h1>
                <p className="text-white"> Contact us to learn more about Rami Elite and how you can get free classes and get started! </p>
            </div>
        </Col>
        <Col md={8}>
          <Form>
            <Row className="mb-3">
              <Col xs={12} md={4}>
                <Form.Group controlId="formFullName">
                  <Form.Label className="text-white"></Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="text-white"></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="formMobileNumber">
                  <Form.Label className="text-white"></Form.Label>
                  <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12}>
                <Form.Group controlId="formProgram">
                  <Form.Label className="text-white"> </Form.Label>
                  <Form.Control as="select">
                    <option>Muay Thai</option>
                    <option>Taekwondo</option>
                    <option>Jiu Jitsu</option>
                    <option>Wrestling</option>
                    <option>Mixed Martial Arts</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button variant="dark" type="submit" className="w-100">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Offers;