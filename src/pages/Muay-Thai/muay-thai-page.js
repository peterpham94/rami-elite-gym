import React, { useState } from 'react';
import './muay-thai-page.css';
import Header from '../../components/Header/Header.js'; // Adjust the import path as needed
import instructorImage1 from '../../assets/images/instructor-a-j.jpg';
import Join from '../../components/Join/Join.js';
import MTClass from '../../components/MTClass/MTClass.js';
import Freedom from '../../components/Freedom/Freedom.js';
import Instructors from '../../components/Instructors/Instructors.js'
import Scheduler from '../../components/Schedule/Scheduler.js';


const images = [instructorImage1];

const MuayThaiPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Header />
      <Join />
      <MTClass />
      <Scheduler />
      <Freedom />
      <Instructors />
    </div>
  );
};

export default MuayThaiPage;