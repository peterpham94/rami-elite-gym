import React from 'react';
import Header from '../../components/Header/Header.js'; // Adjust the import path as needed
import LandingBanner from '../../components/LandingBanner/LandingBanner.js';
import Overview from '../../components/Overview/Overview.js';
import Classes from '../../components/Classes/Classes.js';
import Location from '../../components/Location/Location.js';
import Contact from '../../components/Contact/Contact.js';
import Scheduler from '../../components/Schedule/Scheduler.js';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <LandingBanner />
        <Overview />
        <Classes />
        <Location />
        <Contact />
        <Scheduler />
      {/* Add other components or content for the home page here */}
    </div>
  );
};

export default HomePage;