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
          <h1 className="text-center">Rami Elite Fight Team</h1>
          <p>Freedom Fighter Promotions embodies the concept of freedom by creating opportunities for Muay Thai athletes to compete, grow, and thrive without the challenges and limitations often faced in the sport. Rami Ibrahim's mission is to provide fighters with what they deserve—respect, professional treatment, and consistent chances to showcase their skills—mirroring the essence of personal and professional freedom. By removing barriers, such as inadequate promotion and poor officiating, and fostering an environment of fairness and excellence, the promotion aligns its core values with the idea of empowering fighters to reach their potential and flourish in their careers.</p>
            <Row>
                <Col xs={4} md={4} className="freedom-accolades">
                    <h3> 1000+ </h3>
                    <p> Fighters that trained under Rami</p>
                </Col>
                <Col xs={4} md={4} className="freedom-accolades">
                    <h3> 100 </h3>
                    <p> Championship Wins </p>
                </Col>
                <Col xs={4} md={4} className="freedom-accolades">
                    <h3> 10+ </h3>
                    <p> Active fighters </p>
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Freedom;