import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Overview.css'; // Import the CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS

const Overview = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row d-none d-md-flex">
          <div className="col-md-3 col-6 mb-4">
            <div className="overview-box">
              <h2>Members</h2>
              <h3><i className="fas fa-users"></i> </h3>
              <div className="overview-content">
                <p>Over 100 students enrolled in our adult and youth programs, specializing in Muay Thai and Taekwondo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="overview-box">
              <h2> Awards</h2>
              <h3><i className="fas fa-trophy"></i></h3>
              <div className="overview-content">
                <p>More than 50 elite programs producing fighters who compete and excel in prestigious tournaments worldwide.wned programs that send multiple fighters to represent in high stakes tournaments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="overview-box">
              <h2>Flexible Schedule</h2>
              <h3><i className="fas fa-clock"></i></h3>
              <div className="overview-content">
                <p>Open 7 days a week with morning and evening classes available for both Taekwondo and Muay Thai. days a week</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="overview-box">
              <h2>100% Satisfaction</h2>
              <h3><i className="fas fa-thumbs-up"></i> </h3>
              <div className="overview-content">
                <p>No annual fees or contracts—just month-to-month plans. Achieve your goals with beginner-friendly programs that build confidence and work ethic.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} emulateTouch={true} showIndicators={true}>
            <div className="overview-box">
              <h2>Members</h2>
              <h3><i className="fas fa-users"></i> </h3>
              <div className="overview-content">
                <p>Over 100 students enrolled in our adult and youth programs, specializing in Muay Thai and Taekwondo</p>
              </div>
            </div>
            <div className="overview-box">
              <h2> Awards</h2>
              <h3><i className="fas fa-trophy"></i></h3>
              <div className="overview-content">
                <p>More than 50 elite programs producing fighters who compete and excel in prestigious tournaments worldwide.wned programs that send multiple fighters to represent in high stakes tournaments</p>
              </div>
            </div>
            <div className="overview-box">
              <h2>Flexible Schedule</h2>
              <h3><i className="fas fa-clock"></i></h3>
              <div className="overview-content">
                <p>Open 7 days a week with morning and evening classes available for both Taekwondo and Muay Thai. days a week</p>
              </div>
            </div>
            <div className="overview-box">
              <h2> 100% Satisfaction</h2>
              <h3><i className="fas fa-thumbs-up"></i></h3>
              <div className="overview-content">
                <p>No annual fees or contracts—just month-to-month plans. Achieve your goals with beginner-friendly programs that build confidence and work ethic.  </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Overview;