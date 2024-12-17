import React from "react";
import { useMediaQuery } from "react-responsive";

const LandingBanner = () => {
  // Determine if the screen size is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Image source for mobile and desktop
  const backgroundImage = isMobile
    ? "/assets/images/rami-mobile.jpg" // Replace with your mobile image path
    : "/assets/images/rami-desktop.jpg"; // Replace with your desktop image path

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "45svh" : "70vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Use "cover" to ensure the image covers the entire container
        backgroundPosition: isMobile ? "center" : "center 80%", // Push the image down on desktop view
        backgroundRepeat: "no-repeat", // Prevent tiling
        position: "relative",
      }}
    >
      {/* Content Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
          {/* Optional heading */}
        </h1>
        <p style={{ color: "white", marginTop: "5rem", fontSize: "1.25rem" }}>
          {/* Optional paragraph */}
        </p>
        <button
          onClick={() => window.location.href = "#learn-more"}
          style={{
            marginTop: "1.5rem",
            backgroundColor: "white",
            color: "black",
            padding: "0.5rem 1.5rem", // Smaller button
            borderRadius: "50px", // Oval shape
            cursor: "pointer",
            border: "2px solid black",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingBanner;