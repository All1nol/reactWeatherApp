import React from "react";

const WeatherCard = ({weatherData}) => {
    if (!weatherData) {
        return <div>Loading...</div>; // or any loading indicator
      }
// it solved the problem but why? i dunno i need to research
    const{main,wind,weather} = weatherData;

    return(
        <div>
            <h2>{main.temp}°C</h2>
            <p>Wind speed: {wind.speed}</p>
            <p>Weather description: {weather[0].description}</p> 
        </div>
    );
};

export default WeatherCard;
