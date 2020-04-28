import React from 'react'
import styled from '@emotion/styled'

const WeatherCard = (props) => {

    const red = 100
    const Card = styled.div`
        margin: 0 auto;
        background: linear-gradient(to top, rgba(${red}, 200, 200), lightblue);
        color: aliceblue;
        width: 200px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `

    return (
        <Card>
            <div className='location'>
                <h1 className='city'>Frankfurt</h1>
                <h3 className='country'>DE</h3>
            </div>
            <img className='icon' src="./img/cloudy.png" alt="Weather icon"/>
            <h1 className='temp'>16 °C</h1>
            <h3 className='condition'>Cloudy</h3>
        </Card>
    )
}

export default WeatherCard