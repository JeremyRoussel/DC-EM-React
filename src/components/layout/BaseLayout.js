import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Col, Row, Container} from 'react-bootstrap'
import '../style/sidebar.css'

const BaseLayout = (props) => {
    
    let auth = true
    let visibility = auth ? 'visible' : 'hidden'
  return (
    <>
    
        <Header />
    <Container className="m-0">   
        <Row style={ { height: 100 } }>
            <Col className="col-2 bg-warning sidebar" style={{visibility:visibility}}>
                <Sidebar />
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
    </Container>
    
      


      
    </>
  )
}

export default BaseLayout
