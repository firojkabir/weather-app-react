import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {

	const [city, setCity] = useState('Dhaka, BD')
	const [temp, setTemp] = useState('')
	const [condition, setCondition] = useState('')
	const [country, setCountry] = useState('')

	const data = async () => {
		const apiRes = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fea889a778a75eb0e579a6800b8b859f`
		)
		const resJSON = await apiRes.json()
		return resJSON
	}
	
	const handleSearch = e => {
		e.preventDefault();
		data().then(res => {
			setTemp(res.main.temp)
		})
	}

	return (
		<div className="App">
			<WeatherCard temp={temp} condition="Rain" city='Dhaka' country='BD' />
			{/* <WeatherCard temp={15} condition="Drizzle" city='Sydney' country='AU' />
			<WeatherCard temp={40} condition="Thunderstorm" city='New York' country='US' /> */}
			<form>
				<input 
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button onClick={e=>handleSearch(e)}>Search</button>
			</form>
		</div>
	);
}

export default App;
