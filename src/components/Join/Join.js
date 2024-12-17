import React from 'react';
import './Join.css'; // Import the CSS file

const Join = () => {
  return (
    <div className="join-container">
      <div className="join-content">
        <h1>Free Classes</h1>
        <p>We offer 1 week free of classes for potential new members!</p>
      </div>
      <div className="join-form">
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
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Join;