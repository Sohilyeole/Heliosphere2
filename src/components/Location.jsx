import React from 'react';

function Location({ location }) {
  if (!location) {
    return <p>Fetching location...</p>;
  }


  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold">Your Location</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
}

export default Location;
