import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
return (
    <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">MegaMail</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About Us</Link>
                <Link className="nav-link" to="/Pricing">Pricing</Link>
            </Nav>
            <Nav>
                <Link className="nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-link" to="/signin">Log In</Link>

            </Nav>
        </Navbar>
    </>
)
}

export default Header
