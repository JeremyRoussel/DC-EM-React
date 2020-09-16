import React from 'react'
import {Nav, Navbar, Image, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo from '../style/MegaMailLogo1.png'
import './Header.css';


const Header = () => {

    let auth = useSelector(state => state.auth.authenticated)

    let signs;
    if (!auth){
        signs = 
        <div id="BS-override">
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/signin">Log In</Link>
        </div>
    }
    else {
        signs = <div id="BS-override"><Link className="nav-link" to="/signout">Sign Out</Link></div>
        
    }
return (
    <>
        
        <Navbar className='navbar-custom'>
            <Navbar.Brand href="/"><Image src={logo} fluid alt="logo"></Image></Navbar.Brand>
            <Nav className="mr-auto">
            <Row id="BS-override">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About Us</Link>
                <Link className="nav-link" to="/Pricing">Pricing</Link>

                </Row>
            </Nav>
            <Nav>
                {signs}
            </Nav>
        </Navbar>
        
    </>
)
}

export default Header
