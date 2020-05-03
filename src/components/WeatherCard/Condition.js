import React from 'react'
import styled from '@emotion/styled'

const Condition = ({ temp, condition }) => {

    const Temp = styled.h1`
        font-size: 1.5em;
    `
    const State = styled.h3`
        font-size: 1.2em;
    `

    return (
        <>
            <Temp>{temp} °C</Temp>
            <State>{condition}</State>
        </>
    )
}

export default Condition