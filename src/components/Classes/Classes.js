import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Classes.css'; // Import the CSS file

const Classes = () => {
    return (
        <div className="classes">
            <div className="our-services-wrapper">
                <div className="our-services-container">
                    <div className="our-services">
                        <h1> Our Services </h1>
                        <p>Rami Elite offers expert Muay Thai and Taekwondo programs for kids and adults. For over 25 years, we’ve built a safe, collaborative community where hundreds of students have gained confidence, self-defense skills, and even competed in world-class tournaments. Join us to train, grow, and become part of a legacy of excellence!</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row class-row">
                    <div className="col-md-6 col-12 class-column taekwondo-column">
                        <div className="taekwondo-content-wrapper">
                            <h2>Taekwondo</h2>
                            <p>Join our Taekwondo classes to improve your martial arts skills, discipline, and physical fitness.</p>
                            <button className="learn-more-button">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 class-column muay-thai-column">
                        <div className="muay-thai-content-wrapper">
                            <h2>Muay Thai</h2>
                            <p>Our Muay Thai classes are perfect for those looking to learn self-defense, increase stamina, and build strength.</p>
                            <button className="learn-more-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;