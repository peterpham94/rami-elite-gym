import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Freedom.css'; // Import the CSS file
import freedom from '../../assets/images/freedom_rami.jpg';


const Freedom = () => {
  return (
    <Container className="mt-class-container">
      <Row>
        <Col xs={12} md={6} className="freedom-lbox">
          <img src={freedom} alt="Rami fighter for Freedom Promotions" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="freedom-rbox">
          <h1 className="text-center">Freedom Fighter Promotions</h1>
          <p>Freedom Fighter Promotions embodies the concept of freedom by creating opportunities for Muay Thai athletes to compete, grow, and thrive without the challenges and limitations often faced in the sport. Rami Ibrahim's mission is to provide fighters with what they deserve—respect, professional treatment, and consistent chances to showcase their skills—mirroring the essence of personal and professional freedom. By removing barriers, such as inadequate promotion and poor officiating, and fostering an environment of fairness and excellence, the promotion aligns its core values with the idea of empowering fighters to reach their potential and flourish in their careers.</p>
            <Row>
                <Col xs={4} md={4} className="freedom-accolades">
                    <h3> 30+ </h3>
                    <p> Freedom Promoted Fights</p>
                </Col>
                <Col xs={4} md={4} className="freedom-accolades">
                    <h3> 40 </h3>
                    <p> Titles won </p>
                </Col>
                <Col xs={4} md={4} className="freedom-accolades">
                    <h3> 10+ </h3>
                    <p> Active freedom fighters </p>
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Freedom;