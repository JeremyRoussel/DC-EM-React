import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Burger from './Burger'
import {Col} from 'react-bootstrap'
import '../style/sidebar.css'
import {useOnClick} from './hooks'
import {theme} from '../style/theme'
import { ThemeProvider } from 'styled-components';
import {useSelector} from 'react-redux'
import FocusLock from 'react-focus-lock'
import {Affix} from 'rsuite'





const BaseLayout = (props) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClick(node, () => setOpen(false));
    

    let auth = useSelector(state => state.auth.authenticated)
    let visibility = auth ? 'visible' : 'hidden'

    // let contentSize = !open? 'col-10 offset-1' : 'col-8 offset-3'
    // let contentSize = 'col-10 offset-1' 

  return (
    
    <>
        <Header />

        <ThemeProvider theme={theme}>
        <Affix top={.3}>
            <Col style={{visibility:visibility}} ref={node} data-spy="affix" data-offset-top="205">
            <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Sidebar open={open} setOpen={setOpen} id={menuId} />
                </FocusLock>
            </Col>
            </Affix>
            <Col>
                    {props.children}
            </Col>

        </ThemeProvider>
      
    </>
    
    )
}



export default BaseLayout
