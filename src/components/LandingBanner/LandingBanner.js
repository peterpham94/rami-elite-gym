import React from "react";
import './LandingBanner.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const LandingBanner = () => {
  return (
    <div className="videoWrapper">
      <iframe
        src="https://customer-2ubdanfjf4eg3lw0.cloudflarestream.com/88744dab89341d03ff7d77dffd7feba2/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-2ubdanfjf4eg3lw0.cloudflarestream.com%2F88744dab89341d03ff7d77dffd7feba2%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
        loading="lazy" 
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        muted
        playsInline
      ></iframe>
      <div className="landing-banner-text">
        <h1>Train and become Elite at Philadelphia's premier MMA center</h1>
        <h4>Over 25 years experiences with champion trained coaches in Muay Thai, Ju-Jitsu, Taekwondo and wrestling</h4>
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <a href="tel:+15513393399" className="phone-link">(551) 339-3399</a>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;