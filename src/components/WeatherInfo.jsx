// import React from 'react';

// function WeatherInfo({ weather }) {
//   if (!weather) {
//     return <p>Loading weather data...</p>;
//   }

//   return (
//     <div className="text-center mb-8">
//       <h2 className="text-2xl font-bold">Current Weather</h2>
//       <p>Temperature: {weather.temperature}°C</p>
//       <p>Condition: {weather.condition}</p>
//     </div>
//   );
// }

// export default WeatherInfo;

import React from 'react';
import WeatherCard from './WeatherCard';
import { WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaCity } from 'react-icons/fa'; // Importing city icon from FontAwesome

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  const temperature = `${Math.round(weather.main.temp - 273.15)}°C`; // Convert from Kelvin to Celsius
  const windSpeed = `${weather.wind.speed} m/s`;
  const cityName = weather.name;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <WeatherCard icon={<FaCity />} title="City" value={cityName} />
      <WeatherCard icon={<WiThermometer />} title="Temperature" value={temperature} />
      <WeatherCard icon={<WiStrongWind />} title="Wind Speed" value={windSpeed} />
    </div>
  );
};

export default WeatherInfo;


