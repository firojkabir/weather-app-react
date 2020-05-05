import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {

	const [query, setQuery] = useState('Dhaka, BD')
	const [weather, setWeather] = useState({
		temp: null,
		city: null,
		condition: null,
		country: null
	})
	//Defining the data fetching function
	const getWeather = async (q) => {
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
	}
	//Function to handle search queries from the user side
	const handleSearch = e => {
		e.preventDefault();
		getWeather(query)
	}
	//This hook will make the code run only once the component is mounted
	useEffect(() => {
		getWeather(query)
	}, [])

	return (
		<div className="App">
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
				<button onClick={e=>handleSearch(e)}>Search</button>
			</form>
		</div>
	);
}

export default App;
