import React from "react";
import "./Offer-Mobile.css"; // Import the CSS file for styling
import { Row, Col, Form } from "react-bootstrap"; // Import Bootstrap components

const OfferMobile = ({ isOpen, onClose }) => {
  return (
    <div className={`offer-mobile-container ${isOpen ? "open" : ""}`}>
      <div className="offer-mobile-header">
        <h2>Contact Us</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form className="offer-mobile-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" />
        </div>
        {/* Dropdown for Program Selection */}
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group controlId="formProgram">
              <Form.Label className="bold-label">Select Program</Form.Label>
              <div className="dropdown-wrapper">
                <Form.Control as="select" className="dropdown-with-icon">
                  <option>Muay Thai</option>
                  <option>Taekwondo</option>
                  <option>Jiu Jitsu</option>
                  <option>Wrestling</option>
                  <option>Mixed Martial Arts</option>
                </Form.Control>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" placeholder="Enter your comment"></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OfferMobile;