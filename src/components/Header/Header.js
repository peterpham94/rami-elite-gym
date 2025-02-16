import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img
          src="/assets/images/rami-elite-logo.png" // Replace with your logo path
          alt="Gym Logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;