import React, { useEffect } from 'react';
import './Location.css'; // Import the CSS file
import loadGoogleMapsApi from '../../utils/LoadGoogleMapsApi.js'; // Import the utility function

const Location = () => {
  useEffect(() => {
    const apiKey = 'AIzaSyADj5dJc1ruG_VyOni_MjIw1HHT2MlTbVs'; // Replace with your actual API key

    loadGoogleMapsApi(apiKey)
      .then(() => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 40.06092834472656, lng: -75.08433532714844 },
          zoom: 14,
          mapId: 'DEMO_MAP_ID',
        });

        const marker = new window.google.maps.Marker({
          map,
          position: { lat: 40.06092834472656, lng: -75.08433532714844 },
          title: 'Rami Elite', // Set your business name here
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div>
              <h2>Rami Elite</h2>
              <p>Expert Muay Thai and Taekwondo programs for kids and adults.</p>
              <p>Address: 7249 Rising Sun Ave, Philadelphia, PA 19111</p>
              <p>Phone: (123) 456-7890</p>
              <img src="/path/to/your/image.jpg" alt="Gym Image" style="width: 100%; height: auto;"/>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      })
      .catch((error) => {
        console.error(error.message);
      });

    return () => {
      // Clean up the script when the component unmounts
      const script = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="location-container">
      <div className="location-info-wrapper">
        <div className="location-info">
          <h1>Our Location</h1>
          <p>Address: 7249 Rising Sun Ave, Philadelphia, PA 19111</p>
          <p>Phone: (123) 456-7890</p>
          <h2>Hours</h2>
          <p>Monday - Friday: 6am - 10pm</p>
          <p>Saturday: 8am - 8pm</p>
          <p>Sunday: 8am - 6pm</p>
        </div>
      </div>
      <div id="map" className="location-map"></div>
    </div>
  );
};

export default Location;