import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Products from '../components/Products'

function Home() {
    return (
        <>
            <Header />
            <Container>
                <Products/>
            </Container>
        </>
    )
}

export default Home