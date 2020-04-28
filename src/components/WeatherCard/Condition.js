import React from 'react'
import styled from '@emotion/styled'

const Condition = (props) => {

    const Temp = styled.h1`
        font-size: 1.5em;
    `
    const State = styled.h3`
        font-size: 1.2em;
    `

    return (
        <>
            <Temp>16 °C</Temp>
            <State className='condition'>Cloudy</State>
        </>
    )
}

export default Condition