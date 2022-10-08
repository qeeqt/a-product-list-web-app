import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        <Link to="/add">AddProduct</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/products">Products</Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header