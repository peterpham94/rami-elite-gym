import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo-container">
          <img src="/assets/images/rami-white-logo.png" alt="Rami Elite Logo" className="logo" />
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon"></div>
        </div>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about-us">About Us</a></li>
          <li className="nav-item"><a href="#programs">Programs</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
          <li className="nav-item"><a href="#schedule">Schedule</a></li>
          <li className="nav-item"><a href="#pricing" className="pricing-button">Pricing</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;