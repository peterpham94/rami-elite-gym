import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Instructors.css'; // Import the CSS file
import ramiInstructorImage from '../../assets/images/rami-instructor.jpg'; // Import the actual image
import jhalaniInstructorImage from '../../assets/images/jhalani-instructor.jpg'
import ahmadInstructorImage from '../../assets/images/ahmad-instructor.jpg'

// Sample instructor data
const instructors = [
  {
    name: 'Rami',
    image: ramiInstructorImage,
    bio: 'Owner of Rami Elite, Founder of Freedom Promote, X title fights'
  },
  {
    name: 'Jhalani',
    image: jhalaniInstructorImage,
    bio: 'X Title fight. Link to IG'
  },
  {
    name: 'Ahmad',
    image: ahmadInstructorImage,
    bio: 'x Title fight. Link to IG'
  }
];

const Instructors = () => {
  return (
    <Container className="instructors-container">
      <h1 className="text-center my-4">Muay Thai Instructors</h1>
      <Row>
        {instructors.map((instructor, index) => (
          <Col xs={12} md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={instructor.image} alt={instructor.name} />
              <Card.Body>
                <Card.Title>{instructor.name}</Card.Title>
                <Card.Text>{instructor.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Instructors;