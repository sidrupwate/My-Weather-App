import React, { useState } from 'react';
import '../App.css';
import moment from 'moment';
import { Button, Input } from 'semantic-ui-react';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const WeatherCard = ({ weatherData, cityName, onCityNameChange, isLoading }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = () => {
    onCityNameChange(searchCity);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const refresh = () => {
    window.location.reload();
  };

  return (<>
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
          <p className="header">{weatherData.name}</p>
          <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
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
