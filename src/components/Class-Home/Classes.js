import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Classes.css'; // Import the CSS file

const Classes = () => {
  return (
    <Container fluid className="classes-container">
      {/* Hyperlinks for navigation */}
      <div className="class-links d-md-none"> {/* Only show on mobile view */}
        <a href="#muay-thai" className="class-link">Muay Thai</a>
        <a href="#taekwondo" className="class-link">Taekwondo</a>
        <a href="#jiu-jitsu" className="class-link">Jiu-Jitsu</a>
        <a href="#wrestling" className="class-link">Wrestling</a>
      </div>

      <div className="inner-container">
        <Row className="no-gutters">
          <Col xs={12} md={4} id="muay-thai">
            <Card className="class-card" style={{ backgroundImage: 'url(/assets/images/rami-mobile-cover.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Card.Body>
                <Card.Title>Muay Thai</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} id="taekwondo">
            <Card className="class-card" style={{ backgroundImage: 'url(/assets/images/rami-elite-taekwondo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Card.Body>
                <Card.Title>Taekwondo</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} id="jiu-jitsu">
            <Card className="class-card">
              <Card.Body>
                <Card.Title>Jiu-Jitsu</Card.Title>
                <Card.Text>
                  Develop your grappling skills with our Jiu-Jitsu classes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={12} md={4} id="wrestling">
            <Card className="class-card">
              <Card.Body>
                <Card.Title>Wrestling</Card.Title>
                <Card.Text>
                  Enhance your wrestling techniques with our dedicated wrestling program.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="class-card">
              <Card.Body>
                <Card.Title>Kids Program</Card.Title>
                <Card.Text>
                  Introduce your kids to Muay Thai and Taekwondo in a fun and safe environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="class-card">
              <Card.Body>
                <Card.Title>Personal Training</Card.Title>
                <Card.Text>
                  1-on-1 Training
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Classes;