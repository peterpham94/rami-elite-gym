import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Get in touch to learn more about Rami Elite and the services we can provide for you</p>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>Select a Program:</label>
            <select required>
              <option value="">Select a program</option>
              <option value="adult-taekwondo">Adult Taekwondo</option>
              <option value="adult-muay-thai">Adult Muay Thai</option>
              <option value="under-18-taekwondo">Under 18 Taekwondo</option>
              <option value="under-18-muay-thai">Under 18 Muay Thai</option>
              <option value="other-question">Other Question</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message (Optional):</label>
            <textarea></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;