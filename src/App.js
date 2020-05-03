import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-12} condition="Tornado" city='Frankfurt' country='DE' />
			<WeatherCard temp={15} condition="Drizzle" city='Sydney' country='AU' />
			<WeatherCard temp={40} condition="Thunderstorm" city='New York' country='US' />
		</div>
	);
}

export default App;
