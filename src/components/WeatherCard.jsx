// import React from 'react';
// import { WiThermometer, WiStrongWind } from 'react-icons/wi';
// import { FaCity } from 'react-icons/fa'; // Import a city icon from FontAwesome

// const WeatherCard = ({ icon, title, value }) => {
//   return (
//     <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-500">
//       <div className="flex items-center space-x-4">
//         <div className="text-3xl text-white">{icon}</div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
//           <p className="text-xl font-bold text-white">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;
import React from 'react';
import { WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaCity } from 'react-icons/fa';

const WeatherCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out border-2 ">
      <div className="flex items-center space-x-4">
        <div className="text-4xl text-white animate-pulse">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
          <p className="text-xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

