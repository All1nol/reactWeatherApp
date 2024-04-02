import React from "react";
import './WeatherCard.css';
import mapOpenWeatherIcons from "../WeatherIconMapping/WeatherIconMapping";
import wind_icon from "../../media/wind.png"
const WeatherCard = ({weatherData}) => {


    if (!weatherData) {
        return <div>Loading...</div>;
      }
    const{main,wind,weather} = weatherData;
    const iconUrl = mapOpenWeatherIcons(weather[0].icon); 

    const dynamicBackgroundImage= {
        '01d' : 'background-01d',
        '02d' : 'background-02d',
        '03d' : 'background-03d',
        '04d' : 'background-04d',
        '09d' : 'background-09d',
        '10d' : 'background-10d',
        '11d' : 'background-11d',
        '01n' : 'background-01n',
        '02n' : 'background-02n',
        '03n' : 'background-03n',
        '04n' : 'background-04n',
        '09n' : 'background-09n',
        '10n' : 'background-10n',
        '11n' : 'background-11n',
    }

    let backgorundImage = 'default-background';

    if(dynamicBackgroundImage.hasOwnProperty(weather[0].icon)){
        backgorundImage= dynamicBackgroundImage[weather[0].icon];
    }
    return(
        <div className={`weather-card-container ${backgorundImage}`}>
           <img src={iconUrl} alt="Weather Icon" /> 
            <h2>{main.temp}°C</h2>
            <div className="text-1">
            <img src={wind_icon} width='32px' alt="wind_icon" ></img>
            <p>  Wind speed: {wind.speed} </p>
            </div>
            <p>Weather description: {weather[0].description}</p> 
        </div>
    );
};

export default WeatherCard;
