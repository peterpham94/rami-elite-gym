import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Classes.css'; // Import the CSS file

const Classes = () => {
  return (
    <Container fluid className="classes-container">
      <div className="inner-container">
        <Row className="no-gutters">
          <Col xs={12} md={4}>
            <Card className="class-card" style={{ backgroundImage: 'url(/assets/images/rami-mobile-cover.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Card.Body>
                <Card.Title>Muay Thai</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="class-card" style={{ backgroundImage: 'url(/assets/images/rami-elite-taekwondo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Card.Body>
                <Card.Title>Taekwondo</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
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
          <Col xs={12} md={4}>
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
                <Card.Title>Kids Muay Thai</Card.Title>
                <Card.Text>
                  Introduce your kids to Muay Thai in a fun and safe environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="class-card">
              <Card.Body>
                <Card.Title>Kids Taekwondo</Card.Title>
                <Card.Text>
                  Our Kids Taekwondo program helps children build confidence and discipline.
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