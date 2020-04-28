import React from 'react'

const WeatherCard = (props) => {
    return (
        <div className="card">
            <div className='location'>
                <h1 className='city'>Frankfurt</h1>
                <h3 className='country'>DE</h3>
            </div>
            <img className='icon' src="" alt="Weather icon"/>
            <h1 className='temp'>16 °C</h1>
            <h3 className='condition'>Cloudy</h3>
        </div>
    )
}

export default WeatherCard