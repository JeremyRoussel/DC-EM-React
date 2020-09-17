import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Burger from './Burger'
import {Col, Row, Container} from 'react-bootstrap'
import '../style/sidebar.css'
import {useOnClickOutside} from './hooks'
import {theme} from '../style/theme'
import { ThemeProvider } from 'styled-components';
import {useSelector} from 'react-redux'


const BaseLayout = (props) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));
    

    let auth = useSelector(state => state.auth.authenticated)
    let visibility = auth ? 'visible' : 'hidden'

    let leftSize = auth ? "col-4" : "col-0"
  return (
    
    <>
 
        <Header />
        <ThemeProvider theme={theme}>
        
    {/* <Container className="m-0">
        <Row className = "mt-3"> */}
            <Col style={{visibility:visibility}} className="">      
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Sidebar open={open} setOpen={setOpen} id={menuId} />
            </Col>
            <Col className="col-10 offset-1">
                {props.children}
            </Col>
        {/* </Row>
    </Container> */}
        </ThemeProvider>
      
    </>
    
    )
}

export default BaseLayout
