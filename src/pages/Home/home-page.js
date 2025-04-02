import React from 'react';
import './home-page.css'; // Import the CSS file for the HomePage
import Header from '../../components/Header/Header.js'; // Adjust the import path as needed
import LandingBanner from '../../components/LandingBanner/LandingBanner.js';
import Location from '../../components/Location/Location.js';
import Contact from '../../components/Contact/Contact.js';
import Scheduler from '../../components/Schedule/Scheduler.js';
import Offers from '../../components/Offers/Offers.js';
import Classes from '../../components/Class-Home/Classes.js';
import Overview from '../../components/Gym Overview/Overview.js';

const HomePage = () => {
  return (
    <div>
        <Header />
        <LandingBanner />
        <div className="offers-container">
          <Offers />
        </div>
        <Overview />
        <Classes />
        <Location />
        <Scheduler />
      {/* Add other components or content for the home page here */}
    </div>
  );
};

export default HomePage;