import Button from 'react-bootstrap/Button';
import React from 'react';
import '../App.css';

const Intro = () => {
    return (
        <>
            <div className='intro'>
                <div className='intro-text-section'>
                    <h1 style={{fontWeight:"700"}}>Weather</h1>
                    <h1 style={{fontWeight:"400"}}>Forecast_</h1>
                    <p style={{fontWeight:"100"}}>Get your 7-Day weather forecast of your area.</p>
                    <Button className='button' variant="primary">Get started</Button>
                </div>
                <div className='intro-img-section'>
                    <img className='intro-img' height={200} width={200} src='https://cdn2.iconfinder.com/data/icons/hobbies-misc-1/512/weather___cloudy_partly_forecast_sunny_season_sun_day.png' />
                </div>
            </div>
        </>
    )
}

export default Intro
