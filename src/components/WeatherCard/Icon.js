import React from 'react'
import styled from '@emotion/styled'

const Icon = (props) => {

    const Icon = styled.img`
        width: 40%;
    `

    return (
        <Icon className='icon' src="./img/cloudy.png" alt="Weather icon"/>
    )
}

export default Icon