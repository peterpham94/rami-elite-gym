// src/utils/loadGoogleMapsApi.js
let googleMapsScriptLoaded = false;
let googleMapsScriptLoading = false;
let googleMapsScriptPromise = null;

const loadGoogleMapsApi = (apiKey) => {
  if (googleMapsScriptLoaded) {
    return Promise.resolve();
  }

  if (googleMapsScriptLoading) {
    return googleMapsScriptPromise;
  }

  googleMapsScriptLoading = true;
  googleMapsScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onerror = () => {
      googleMapsScriptLoading = false;
      reject(new Error('Failed to load Google Maps API script'));
    };
    script.onload = () => {
      googleMapsScriptLoaded = true;
      googleMapsScriptLoading = false;
      resolve();
    };
    document.head.appendChild(script);
  });

  return googleMapsScriptPromise;
};

export default loadGoogleMapsApi;