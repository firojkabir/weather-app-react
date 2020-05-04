import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {

	const [query, setQuery] = useState('Dhaka, BD')
	const [city, setCity] = useState('')
	const [temp, setTemp] = useState('')
	const [condition, setCondition] = useState('')
	const [country, setCountry] = useState('')

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
			setTemp(res.main.temp)
			setCondition(res.weather[0].main)
			setCountry(res.sys.country)
			setCity(res.name)
		})
	}

	return (
		<div className="App">
			<WeatherCard temp={temp} condition={condition} city={city} country={country} />
			{/* <WeatherCard temp={15} condition="Drizzle" city='Sydney' country='AU' />
			<WeatherCard temp={40} condition="Thunderstorm" city='New York' country='US' /> */}
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
