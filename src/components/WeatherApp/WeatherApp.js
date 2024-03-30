import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInp from '../SearchInput/SearchInp';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '59dbc65076a7e1abd807d9e61a11eebc';
    //Please, use the endpoint api.openweathermap.org for your API calls
    //- Example of API call:
    //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=59dbc65076a7e1abd807d9e61a11eebc

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                if (error.response && (error.response.data === 404 || error.response.data === 402)) {
                    alert('City not found or API limit exceeded');
                } else {
                    console.log('Error with fetching', error);
                    alert('Please, rewrite city name again')
                }
            }
        };
        if (city) {
            fetchData();
        }
    }, [city, apiKey]);

    return (
        <div className='App'>
            <SearchInp value={city} setCity={setCity} setWeatherData={setWeatherData} />
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );

}

export default WeatherApp;