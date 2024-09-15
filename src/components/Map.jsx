// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const Map = ({ location }) => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);

//   const cityCoords = [40.7128, -74.0060];// Replace with your city's coordinates

//   useEffect(() => {
//     if (location && map) {
//       const { latitude, longitude } = location;

//       map.setView([latitude, longitude], 13, {
//         animate: true,
//         pan: { duration: 1 },
//       });

//       if (marker) {
//         marker.setLatLng([latitude, longitude]);
//       } else {
//         const newMarker = L.marker([latitude, longitude], {
//           icon: L.divIcon({
//             className: 'custom-icon',
//             html: `<div class="marker-3d-animation"></div>`,
//             iconSize: [20, 20],
//             iconAnchor: [10, 10],
//           }),
//         }).addTo(map);
//         setMarker(newMarker);
//       }
//     }
//   }, [location, map]);

//   return (
//     <MapContainer
//       center={cityCoords}
//       zoom={10}
//       style={{ height: '400px', width: '100%' }}
//       whenCreated={setMap}
//       className="rounded-lg shadow-lg"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={cityCoords} icon={L.divIcon({ className: 'city-highlight' })}>
//         <Popup>Your City</Popup>
//       </Marker>
//       {location && (
//         <Marker position={[location.latitude, location.longitude]}>
//           <Popup>Your Location</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// };

// export default Map;
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const Map = ({ location,latitude,longitude}) => {
  
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);

//   // Default to a central city coordinate for initial view
//   const cityCoords = [latitude, longitude]
  


//   useEffect(() => {
//     if (location && map) {
//       const { latitude, longitude } = location;
    
     
//       // Update the map view to the user's location
//       map.setView([latitude, longitude], 15, { // Adjust zoom level here
//         animate: true,
//         pan: { duration: 1 },
//       });

//       // Update or create marker for user's location
//       if (marker) {
//         marker.setLatLng([latitude, longitude]);
//       } else {
//         const newMarker = L.marker([latitude, longitude], {
//           icon: L.divIcon({
//             className: 'custom-icon',
//             html: `<div class="marker-3d-animation"></div>`,
//             iconSize: [20, 20],
//             iconAnchor: [10, 10],
//           }),
//         }).addTo(map);
//         setMarker(newMarker);
//       }
//     }
//   }, [location, map]);

//   return (
//     <MapContainer
    
//       center={cityCoords}
//       zoom={10} // You can adjust the zoom level here as needed
//       style={{ height: '400px', width: '100%' }}
//       whenCreated={setMap}
//       className="rounded-lg shadow-lg"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {/* Highlight city with a custom marker */}
//       <Marker position={cityCoords} icon={L.divIcon({ className: 'city-highlight' })}>
//         <Popup>Your City</Popup>
//       </Marker>
//       {/* Add marker for the user's current location if available */}
//       {location && (
//         <Marker position={[location.latitude, location.longitude]}>
//           <Popup>Your Location</Popup>
         
//         </Marker>
//       )}
//     </MapContainer>
//   );
// };

// export default Map;


// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const Map = ({ location }) => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);

//   // Default to a central city coordinate for initial view
//   const defaultCoords = [20.5937, 78.9629]; // Default coordinates (India) or any other central location
//   const cityCoords = location ? [location.latitude, location.longitude] : defaultCoords;

//   useEffect(() => {
//     if (location && map) {
//       const { latitude, longitude } = location;
      
//       // Update the map view to the user's location
//       map.setView([latitude, longitude], 15, { // Adjust zoom level here
//         animate: true,
//         pan: { duration: 1 },
//       });

//       // Update or create marker for user's location
//       if (marker) {
//         marker.setLatLng([latitude, longitude]);
//       } else {
//         const newMarker = L.marker([latitude, longitude], {
//           icon: L.divIcon({
//             className: 'custom-icon',
//             html: `<div class="marker-3d-animation"></div>`,
//             iconSize: [20, 20],
//             iconAnchor: [10, 10],
//           }),
//         }).addTo(map);
//         setMarker(newMarker);
//       }
//     }
//   }, [location, map]);

//   return (
//     <MapContainer
//       center={cityCoords}
//       zoom={10} // You can adjust the zoom level here as needed
//       style={{ height: '400px', width: '100%' }}
//       whenCreated={setMap}
//       className="rounded-lg shadow-lg"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {/* Highlight city with a custom marker */}
//       <Marker position={cityCoords} icon={L.divIcon({ className: 'city-highlight' })}>
//         <Popup>Your City</Popup>
//       </Marker>
//       {/* Add marker for the user's current location if available */}
//       {location && (
//         <Marker position={[location.latitude, location.longitude]}>
//           <Popup>Your Location</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// };

// export default Map;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ location }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (location && map) {
      const { latitude, longitude } = location;

      // Set the map view to the user's location with full zoom
      map.setView([latitude, longitude], 18, { // Full zoom level
        animate: true,
        pan: { duration: 1 },
      });

      // Update or create a marker for the user's location
      if (marker) {
        marker.setLatLng([latitude, longitude]);
      } else {
        const newMarker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: 'custom-icon',
            html: `<div class="marker-3d-animation"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          }),
        }).addTo(map);
        setMarker(newMarker);
      }
    }
  }, [location, map]);

  return (
    <MapContainer
      center={location ? [location.latitude, location.longitude] : [20.5937, 78.9629]} // Default location if location data is unavailable
      zoom={18} // Full zoom level
      style={{ height: '425px', width: '100%' }}

      whenCreated={setMap}
      className="rounded-3xl shadow-lg border-red-400 border-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Add marker for the user's current location if available */}
      {location && (
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;





// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Custom hook to handle map view updates
// const MapUpdater = ({ location }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (location) {
//       const { latitude, longitude } = location;

//       // Set the map view to the user's location with full zoom
//       map.setView([latitude, longitude], 18, {
//         animate: true,
//         pan: { duration: 1 },
//       });
//     }
//   }, [location, map]);

//   return null;
// };

// const Map = ({ location }) => {
//   const [marker, setMarker] = useState(null);

//   useEffect(() => {
//     if (location) {
//       const { latitude, longitude } = location;

//       if (marker) {
//         marker.setLatLng([latitude, longitude]);
//       } else {
//         const newMarker = L.marker([latitude, longitude], {
//           icon: L.divIcon({
//             className: 'custom-icon',
//             html: `<div class="marker-3d-animation"></div>`,
//             iconSize: [20, 20],
//             iconAnchor: [10, 10],
//           }),
//         }).addTo(map);
//         setMarker(newMarker);
//       }
//     }
//   }, [location, marker]);

//   return (
//     <MapContainer
//       center={location ? [location.latitude, location.longitude] : [20.5937, 78.9629]} // Default location if location data is unavailable
//       zoom={18} // Full zoom level
//       style={{ height: '400px', width: '100%' }}
//       className="rounded-lg shadow-lg"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <MapUpdater location={location} />
//       {/* Add marker for the user's current location if available */}
//       {location && (
//         <Marker position={[location.latitude, location.longitude]}>
//           <Popup>Your Location</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// };

// export default Map;
