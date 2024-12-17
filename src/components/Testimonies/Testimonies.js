import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonies.css'; // Import the CSS file
import loadGoogleMapsApi from '../../utils/LoadGoogleMapsApi.js'; // Import the utility function

const Testimonies = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'AIzaSyADj5dJc1ruG_VyOni_MjIw1HHT2MlTbVs'; // Replace with your actual API key

    loadGoogleMapsApi(apiKey)
      .then(() => {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        const request = {
          placeId: 'ChIJdTNa37e2xokRi0vGlmEi254', // Replace with your place ID
          fields: ['reviews'],
        };

        service.getDetails(request, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setReviews(place.reviews.slice(0, 4)); // Get the top 4 reviews
          } else {
            setError('Failed to fetch reviews');
          }
        });
      })
      .catch((error) => {
        setError(error.message);
      });

    return () => {
      // Clean up the script when the component unmounts
      const script = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonies-container">
      <h1>Customer Reviews</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <img src={review.profile_photo_url} alt={review.author_name} className="reviewer-photo" />
                  <h3>{review.author_name}</h3>
                </div>
                <div className="review-rating">{renderStars(review.rating)}</div>
                <div className="review-text">
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reviews-carousel">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              emulateTouch={true}
              showIndicators={true}
            >
              {reviews.map((review, index) => (
                <div key={index} className="review">
                  <div className="review-header">
                    <img src={review.profile_photo_url} alt={review.author_name} className="reviewer-photo" />
                    <h3>{review.author_name}</h3>
                  </div>
                  <div className="review-rating">{renderStars(review.rating)}</div>
                  <div className="review-text">
                    <p>{review.text}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonies;