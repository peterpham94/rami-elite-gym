import React from "react";
import { useMediaQuery } from "react-responsive";
import './LandingBanner.css'; // Import the CSS file

const LandingBanner = () => {
  // Determine if the screen size is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div style={{ position: 'relative', paddingTop: isMobile ? '216.66666666666666%' : '51.354166666666664%' }}>
      <iframe
        src={isMobile 
          ? "https://customer-2ubdanfjf4eg3lw0.cloudflarestream.com/e1ffca501313236c85ac69d6669589c5/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-2ubdanfjf4eg3lw0.cloudflarestream.com%2Fe1ffca501313236c85ac69d6669589c5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          : "https://customer-2ubdanfjf4eg3lw0.cloudflarestream.com/4716b8a1ad09e71758137fc1fc84e2b7/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-2ubdanfjf4eg3lw0.cloudflarestream.com%2F4716b8a1ad09e71758137fc1fc84e2b7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"}
        loading="lazy"
        style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        title="Cloudflare Stream Video"
      ></iframe>
    </div>
  );
};

export default LandingBanner;