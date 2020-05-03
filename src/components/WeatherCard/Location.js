import React from 'react'
import styled from '@emotion/styled'

const Location = ({ city, country }) => {

    const Container = styled.div`
        text-align: center;
    `
    const City = styled.h1`
        font-size: 1.6em;
    `
    const Country = styled.h3`
        font-size: 1.1em;
    `

    return (
        <Container>
            <City>{city}</City>
            <Country>{country}</Country>
        </Container>
    )
}

export default Location