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

	const data = async (q) => {
		const apiRes = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=fea889a778a75eb0e579a6800b8b859f`
		)
		const resJSON = await apiRes.json()
		return resJSON
	}
	
	const handleSearch = e => {
		e.preventDefault();
		data(query).then(res => {
			setWeather({
				temp: res.main.temp,
				city: res.name,
				condition: res.weather[0].main,
				country: res.sys.country
			})
		})
	}

	useEffect(() => {
		data(query).then(res => {
			setWeather({
				temp: res.main.temp,
				city: res.name,
				condition: res.weather[0].main,
				country: res.sys.country
			})
		})
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
