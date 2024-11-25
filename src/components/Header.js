import React from 'react'
import { Container, Button, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Header() {

    const cartItems = useSelector((state) => state.cart);

    return (
        <Container>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="facebook.com" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">Simple header</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><Button variant="primary">
                    Cart <Badge bg="secondary">{cartItems.length}</Badge>
                    <span className="visually-hidden">unread messages</span>
                    </Button></li>
                </ul>
            </header>
        </Container>
    )
}

export default Header