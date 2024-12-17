import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import './Header.css'; // Import the CSS file

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Detect mobile devices
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu for mobile

  const logoHeight = isMobile ? "18px" : "40px"; // Set logo size dynamically

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      style={{
        height: "70px", // Fixed height for the header
        backgroundColor: "white", // White background
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        position: "fixed", // Make sure it stays fixed at the top
        top: 0, // Ensure it stays at the very top of the page
        left: 0, // Full-width of the screen
        width: "100%", // Full width of the screen
        zIndex: 100, // Keep the header on top of all other elements
      }}
    >
      <div
        className="flex items-center justify-between px-4 h-full"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Space out links and the logo
          height: "100%", // Match the header height
        }}
      >
        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="w-6 h-6"
              style={{ fill: "none", stroke: "black", strokeWidth: 2 }} // Direct styling for black stroke
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}

        {/* Left-aligned links (Only visible on desktop) */}
        {!isMobile && (
          <div className="flex">
            <a
              href="#about"
              className="text-black hover:text-red-500 text-lg mr-8" // Added margin for spacing
              style={{ textDecoration: "none" }}
            >
            
            </a>
            <a
              href="#classes"
              className="text-black hover:text-red-500 text-lg mr-8" // Added margin for spacing 
              style={{ textDecoration: "none" }}
            >
              
            </a>
          </div>
        )}

        {/* Centered Logo */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <img
            src="/assets/images/rami-elite-logo.png" // Replace with your logo path
            alt="Gym Logo"
            style={{
              height: logoHeight,
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right-aligned links (Only visible on desktop) */}
        {!isMobile && (
          <div className="flex">
            <a
              href="#contact"
              className="text-black hover:text-red-500 text-lg mr-8" // Added margin for spacing
              style={{ textDecoration: "none" }}
            >
              
            </a>
            <a
              href="#location"
              className="text-black hover:text-red-500 text-lg"
              style={{ textDecoration: "none" }}
            >
              
            </a>
          </div>
        )}
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMobile && menuOpen && (
        <nav
          className="absolute top-16 left-0 w-full bg-white shadow-md"
          style={{
            position: "absolute",
            top: "70px", // Dropdown starts right below the header
            left: "0",
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 50,
          }}
        >
          <ul className="flex flex-col items-start p-4 space-y-4" style={{ listStyleType: "none" }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="#about"
                className="text-black hover:text-red-500 text-lg"
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none" }} // Remove underline
              >
                about
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="#classes"
                className="text-black hover:text-red-500 text-lg"
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none" }} // Remove underline
              >
                classes
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="#contact"
                className="text-black hover:text-red-500 text-lg"
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none" }} // Remove underline
              >
                contact
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="#location"
                className="text-black hover:text-red-500 text-lg"
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none" }} // Remove underline
              >
                location
              </a>
            </li>     
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
