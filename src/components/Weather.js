import React, { useState } from 'react';
import '../App.css';
import moment from 'moment';
import { Button, Input, Loader } from 'semantic-ui-react';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherCard = ({ weatherData, cityName, onCityNameChange, isLoading }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = () => {
    onCityNameChange(searchCity);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    };
  };

  const handleRefresh = () => {
    window.location.reload()
  }

  if (!weatherData || Object.keys(weatherData).length === 0) {
    // Render a loading state or return null if weatherData is undefined or empty
    return isLoading ? <Loader active>Loading</Loader> : null;
  }

  return (
    <>
      <div className='App'>
        <div className="search-bar">
          <Input className='search-input'
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city name"
            action={
              <Button
                className='search-button'
                color="blue"
                icon="search"
                onClick={handleSearch}
                loading={isLoading}
              />
            }
          />
        </div>
        <div className="main">
          <div className="top">
            <p className="header">{weatherData.name}<CloudIcon style={{ marginLeft: "10px" }} />{weatherData.main.temp} &deg;C</p>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={handleRefresh} />
          </div>

          <div className="flex">
            <p className="day"><CalendarMonthIcon style={{ margin: "10px", fontSize: "30px" }} />{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className="description"><FilterDramaIcon style={{ margin: "10px", fontSize: "30px" }} />{weatherData.weather[0].main}</p>
          </div>

          <div className="flex">
            <p className="temp"><DeviceThermostatIcon style={{ margin: "10px" }} />Temperature: {weatherData.main.temp} &deg;C</p>
            <p className="temp"><WaterDropIcon style={{ margin: "10px" }} />Humidity: {weatherData.main.humidity} %</p>
          </div>

          <div className="flex">
            <p className="sunrise-sunset"><WbSunnyIcon style={{ margin: "10px" }} />Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className="sunrise-sunset"><WbTwilightIcon style={{ margin: "10px" }} />Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
