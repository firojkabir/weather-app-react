import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
	const data = async () => {
		const apiRes = await fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=London,gb&units=metric&appid=fea889a778a75eb0e579a6800b8b859f"
		)
		const resJSON = await apiRes.json()
		return resJSON
	}
	data().then(res => {
		console.log('Feels like ' + res.main.feels_like)
		console.log('Real temp ' + res.main.temp)
	})

	return (
		<div className="App">
			<WeatherCard temp={-12} condition="Tornado" city='Frankfurt' country='DE' />
			<WeatherCard temp={15} condition="Drizzle" city='Sydney' country='AU' />
			<WeatherCard temp={40} condition="Thunderstorm" city='New York' country='US' />
		</div>
	);
}

export default App;
