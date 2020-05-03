import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-20} condition="Snow" />
			<WeatherCard temp={15} condition="Drizzle" />
			<WeatherCard temp={40} condition="Thunderstorm" />
		</div>
	);
}

export default App;
