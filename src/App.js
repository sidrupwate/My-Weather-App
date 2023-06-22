import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import WeatherCard from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

      if (cityName !== '') {
        apiUrl += `?q=${cityName}`;
      } else {
        apiUrl += `?lat=${lat}&lon=${long}`;
      }

      apiUrl += `&units=metric&appid=30b9cf22d51e66b392eb7548ccff0118`;

      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };

    fetchData();
    getLocation();
  }, [cityName, lat, long]);

  return (
    <div>
      <WeatherCard
        weatherData={data}
        isLoading={isLoading}
        cityName={cityName}
        onCityNameChange={(name) => setCityName(name)}
      />
    </div>
  );
}
