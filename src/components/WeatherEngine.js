import React, { useState, useEffect } from 'react';

import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({ location }) => {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        condition: null,
        country: null
    })
    //Defining the data fetching function
    const getWeather = async (q) => {
        setQuery('')
        setLoading(true)
        try {
            const apiRes = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=fea889a778a75eb0e579a6800b8b859f`
            )
            const resJSON = await apiRes.json()
            setWeather({
                temp: resJSON.main.temp,
                city: resJSON.name,
                condition: resJSON.weather[0].main,
                country: resJSON.sys.country
            }) 
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }
    //Function to handle search queries from the user side
    const handleSearch = e => {
        e.preventDefault();
        getWeather(query)
    }
    //This hook will make the code run only once the component is mounted
    useEffect(() => {
        getWeather(location)
    }, [location])

    return (
        <div>
            {!loading && !error ?
                (
                    <div>
                        <WeatherCard
                            temp={weather.temp}
                            condition={weather.condition}
                            city={weather.city}
                            country={weather.country}
                        />
                        <form>
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button onClick={e => handleSearch(e)}>
                                Search
                            </button>
                        </form>
                    </div>
                ) : loading ?
                (
                    <div style={{ color: 'black'}}>
                        Loading
                    </div>
                ) : !loading && error ? 
                    (
                        <div>
                            There has been an error!!<br /><br />
                            <button onClick={() => setError(false)}>
                                Reset!
                            </button>
                        </div>
                    ) : null }
        </div>
    );
}

export default WeatherEngine;
