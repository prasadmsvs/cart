import React from 'react';
import { Navbar, Container, Badge, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
    const cartSize = useSelector(state => state.cart.products.length); // cart length to show size
    return (
        // Basic Navbar
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="/"><h1>Shop</h1></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link to="/" className="mr-1">
                        <Button variant="primary">Home</Button>
                    </Link>
                    <Link to="/designs/all" className="mr-1">
                        <Button variant="primary">Designs</Button>
                    </Link>
                    <Link to="/cart">
                        <Badge bg="primary">{cartSize}</Badge>
                        <img src="/img/cart.png" alt="shopping cart" width={40} height={40} />
                    </Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;