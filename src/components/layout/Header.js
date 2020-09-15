import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo from '../style/MegaMailLogo1.png'
import '../style/Header.css';


const Header = () => {

    let auth = useSelector(state => state.auth.authenticated)

    let signs;
    if (!auth){
        signs = 
        <>
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/signin">Log In</Link>
        </>
    }
    else {
        signs = <Link className="nav-link" to="/signout">Sign Out</Link>
        
    }
return (
    <>
        <Navbar class='navbar-custom'>
            <Navbar.Brand href="#home"><img src={logo} alt="logo"></img></Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About Us</Link>
                <Link className="nav-link" to="/Pricing">Pricing</Link>
            </Nav>
            <Nav>
                {signs}

            </Nav>
        </Navbar>
    </>
)
}

export default Header
