import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Col, Row, Container} from 'react-bootstrap'

const BaseLayout = (props) => {
  return (
    <>
    
        <Header />
    <Container className="m-0">   
        <Row>
            <Col className="col-1">
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
