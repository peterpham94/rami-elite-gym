import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MTClass.css'; // Import the CSS file
import juniorImage from '../../assets/images/junior.jpg';
import technique from '../../assets/images/drills.jpg';
import sparing from '../../assets/images/sparing.jpg';
import drills from '../../assets/images/drills.jpg';
import flexability from '../../assets/images/flexability.jpg';

const MTClass = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="mt-class-container">
      <Container className="text-center my-4">
        <h1>Rami's Training</h1>
        <p>Comprehensive Training for All Levels. Join our classes to experience a dynamic mix of pad work, technique drills, sparring, conditioning, strength training, and junior-friendly exercises. Whether you're looking to build fitness, master techniques, or push your limits, our program is designed to help you achieve your goals in a supportive and energetic environment.</p>
      </Container>
      <div className="d-md-none">
        <Nav variant="tabs" className="justify-content-center mb-3">
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect(0)}>Junior Classes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect(1)}>Technique/Drills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect(2)}>Sparing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect(3)}>Heavy Bags</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect(4)}>Strength/Conditioning</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect(5)}>Clinching</Nav.Link>
          </Nav.Item>
        </Nav>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="mt-class-box">
              <img src={juniorImage} alt="Junior Classes" className="img-fluid" />
              <h3>Junior Classes</h3>
              <p> Authentic Muay Thai for children 5-12 years old. Kids increase strength, flexibility, focus while learning discipline and self-confidence through the martial art. Great fun, too! Clean uniform, training gloves and shinguards required; mouthguard and groin protection suggested.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mt-class-box">
              <img src={technique} alt="Technique Training" className="img-fluid" />
              <h3>Technique/Drills</h3>
              <p>Building power, timing and footwork on the heavy bag by building combinations step-by-step and building stamina through the use of varied training intervals and intensities. Clean uniform, training gloves required.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mt-class-box">
              <img src={sparing} alt="Sparing Class" className="img-fluid" />
              <h3>Sparing</h3>
              <p>Working with a partner to develop offensive and defensive combinations with Thai pads – the fastest, most efficient way to learn Muay Thai. Clean uniform, training gloves required.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mt-class-box">
              <img src={drills} alt="Drills" className="img-fluid" />
              <h3>Heavy Bags</h3>
              <p>Strictly controlled and safe partner work practicing offensive and defensive techniques, simulating fight scenarios with drills progressing to one-step and/or single-technique sparring. This class is limited to Five Points students only.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mt-class-box">
              <img src={flexability} alt="Flexability Training" className="img-fluid" />
              <h3>Strength/Conditioning</h3>
              <p>Strictly controlled and safe partner work practicing offensive and defensive techniques, simulating fight scenarios with drills progressing to one-step and/or single-technique sparring. This class is limited to Five Points students only.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mt-class-box">
              <img src={flexability} alt="Flexability Training" className="img-fluid" />
              <h3>Clinching</h3>
              <p>Working with a partner to develop offensive and defensive combinations with Thai pads – the fastest, most efficient way to learn Muay Thai. Clean uniform, training gloves required.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-none d-md-block">
        <Row>
          <Col xs={12} md={4} className="mt-class-box">
            <img src={juniorImage} alt="Junior Classes" className="img-fluid" />
            <h3>Junior Classes</h3>
            <p> Authentic Muay Thai for children 5-12 years old. Kids increase strength, flexibility, focus while learning discipline and self-confidence through the martial art. Great fun, too! Clean uniform, training gloves and shinguards required; mouthguard and groin protection suggested.</p>
          </Col>
          <Col xs={12} md={4} className="mt-class-box">
            <img src={technique} alt="Technique Training" className="img-fluid" />
            <h3>Technique/Drills</h3>
            <p>Building power, timing and footwork on the heavy bag by building combinations step-by-step and building stamina through the use of varied training intervals and intensities. Clean uniform, training gloves required.</p>
          </Col>
          <Col xs={12} md={4} className="mt-class-box">
            <img src={sparing} alt="Sparing Class" className="img-fluid" />
            <h3>Sparing</h3>
            <p>Working with a partner to develop offensive and defensive combinations with Thai pads – the fastest, most efficient way to learn Muay Thai. Clean uniform, training gloves required.</p>
          </Col>
          <Col xs={12} md={4} className="mt-class-box">
            <img src={drills} alt="Drills" className="img-fluid" />
            <h3>Heavy Bags</h3>
            <p>Strictly controlled and safe partner work practicing offensive and defensive techniques, simulating fight scenarios with drills progressing to one-step and/or single-technique sparring. This class is limited to Five Points students only.</p>
          </Col>
          <Col xs={12} md={4} className="mt-class-box">
            <img src={flexability} alt="Flexability Training" className="img-fluid" />
            <h3>Strength/Conditioning</h3>
            <p>Strictly controlled and safe partner work practicing offensive and defensive techniques, simulating fight scenarios with drills progressing to one-step and/or single-technique sparring. This class is limited to Five Points students only.</p>
          </Col>
          <Col xs={12} md={4} className="mt-class-box">
            <img src={flexability} alt="Flexability Training" className="img-fluid" />
            <h3>Clinching</h3>
            <p>Working with a partner to develop offensive and defensive combinations with Thai pads – the fastest, most efficient way to learn Muay Thai. Clean uniform, training gloves required.</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MTClass;