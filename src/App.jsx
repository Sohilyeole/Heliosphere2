
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Location from './components/Location';
import WeatherInfo from './components/WeatherInfo';
import HeatwavePrediction from './components/HeatwavePrediction';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Map from './components/Map';
import About from './components/About';
import axios from 'axios';
import LoginPage from './components/Loginpage';
import SignupPage from './components/SignupPage';
import HeatwaveIndicator from './components/HeatwaveIndicator'; // Import the HeatwaveIndicator component
import Contact from './components/Contact.Jsx';
import Dashboard from './components/Dashboard';


function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [heatwaveind, setHeatwaveind] = useState(20);

  const handleSearch = async (query) => {
    console.log("Searching for:", query);
    setSearchQuery(query);
    
    try {
        
      const res = await axios.get(
        ``
      );
      setLocation({ latitude: res.data.coord.lat, longitude: res.data.coord.lon });
      console.log("Weather data:", res.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getThemeColor = (index) => {
    if (index <= 20) return 'from-yellow-200 to-yellow-500';
    if (index <= 40) return 'from-orange-400 to-orange-600';
    if (index <= 60) return 'from-orange-500 to-red-600';
    if (index <= 80) return 'from-red-500 to-red-700';
    return 'from-red-600 to-red-800';
  };

  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLatitude(latitude);
        setLongitude(longitude);
      });
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (location) {
      
        const response = await axios.get(

          ``
        );
        setWeather(response.data);
        console.log(weather);

        const heatres = await axios.get(`https://heliosphere.up.railway.app/?lat=${location.latitude}&long=${location.longitude}`);
        const s = (heatres.data.probability);
        let twoDigitNumber = parseInt(s.toString().slice(0, 2));
        console.log(twoDigitNumber);
        setHeatwaveind(twoDigitNumber);
      }
    };

    fetchWeather();
  }, [location]);

  // const dynamicTheme = heatwaveind !== null ? getThemeColor(heatwaveind) : 'from-gray-900 to-gray-900';
  //  const dynamicTheme='from-black-900 to-gray-900'

  return (
    <Router>
      <div className={`min-h-screen flex flex-col bg-black`}>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="flex-1 text-white p-6 flex">
                <div className="max-w-2xl w-full shadow-2xl bg-gray-800 text-white rounded-3xl p-10 mb-6 flex-grow">
                  <Location location={location} />
                  <WeatherInfo weather={weather} />
                  <HeatwavePrediction prediction={heatwaveind} />
                  {heatwaveind !== null && <HeatwaveIndicator heatwaveIndex={heatwaveind} />}
                </div>
                <div className="w-[40%] pl-6   ">
                  <Map location={location} />
                </div>
                
              </div>
              
            } 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Chatbot />
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;



