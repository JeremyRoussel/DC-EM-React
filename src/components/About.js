import React from 'react'
import {Card, Button, Col, Row, Container} from 'react-bootstrap'
import guy from './images/no.png'

const About = () => {
  return (
    <>
    <Container>
    <Col className="col-8 offset-2">
        <Row className="d-flex justify-content-center mt-5">
            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={guy} />
                <Card.Body>
                    <Card.Title>Jeremy Roussel</Card.Title>
                    <Card.Text>
                    Role: Backend Development, Architecture
                    </Card.Text>
                    <Button variant="primary">Github</Button>
                </Card.Body>
            </Card>
        

            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={guy} />
                <Card.Body>
                    <Card.Title>Woody Connell</Card.Title>
                    <Card.Text>
                    Role: Backend Development, API handling
                    </Card.Text>
                    <Button variant="primary">Github</Button>
                </Card.Body>
            </Card>
        </Row>
        <Row className="d-flex justify-content-center mt-5">

            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={guy} />
                <Card.Body>
                    <Card.Title>Dan Gelok</Card.Title>
                    <Card.Text>
                    Role: Frontend Development, UX
                    </Card.Text>
                    <Button variant="primary">Github</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={guy} />
                <Card.Body>
                    <Card.Title>Chris David</Card.Title>
                    <Card.Text>
                    Role: Frontend Development, animations
                    </Card.Text>
                    <Button variant="primary">Github</Button>
                </Card.Body>
            </Card>
        </Row>
    </Col>
    </Container>
    </>
  )
}

export default About
