import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <h5>Contact Us</h5>
                <p>Email: info@muaythaigym.com</p>
                <p>Phone: (123) 456-7890</p>
                <div className="social-media">
                    <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </div>
                <hr className="my-3" />
                <p>© {new Date().getFullYear()} Muay Thai Gym. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;