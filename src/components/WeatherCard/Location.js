import React from 'react'
import styled from '@emotion/styled'

const Location = (props) => {

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
            <City>Frankfurt</City>
            <Country>DE</Country>
        </Container>
    )
}

export default Location