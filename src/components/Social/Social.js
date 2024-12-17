import React from 'react';
import './Social.css'; // Import the CSS file

const Social = () => {
  return (
    <div className="social-container">
      <h1>View our Community</h1>
      <div className="instagram-posts">
        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DAfPlthRqLL/embed"
            width="320"
            height="440"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DCP6-hqR_ds/embed"
            width="320"
            height="440"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DB1yZz1pg9R/embed"
            width="320"
            height="440"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Social;