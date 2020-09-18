import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Burger from './Burger'
import {Col, Row, Container} from 'react-bootstrap'
import '../style/sidebar.css'
import {useOnClick} from './hooks'
import {theme} from '../style/theme'
import { ThemeProvider } from 'styled-components';
import {useSelector} from 'react-redux'


const BaseLayout = (props) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClick(node, () => setOpen(false));
    

    let auth = useSelector(state => state.auth.authenticated)
    let visibility = auth ? 'visible' : 'hidden'

  return (
    
    <>
        <Header />

        <ThemeProvider theme={theme}>

            <Col style={{visibility:visibility}} className="">      
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Sidebar open={open} setOpen={setOpen} id={menuId} />
            </Col>
            <Col className="col-10 offset-1">
                {props.children}
            </Col>

        </ThemeProvider>
      
    </>
    
    )
}

export default BaseLayout
