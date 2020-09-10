import React from 'react'
import {Card, Button, Col, Row, Container} from 'react-bootstrap'
import guy from './images/no.png'
import woody from './images/woodyheadshot.jpg'

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
                    Role: Back-end Development, Architecture
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/JeremyRoussel/" target="_blank">Github</Button>
                </Card.Body>
            </Card>
        

            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={woody} />
                <Card.Body>
                    <Card.Title>Woody Connell</Card.Title>
                    <Card.Text>
                    Role: Back-end Development, API handling
                    </Card.Text>
                    {/* secondary link: "https://www.linkedin.com/in/woody-connell/" */}
                    <Button variant="primary" href="https://github.com/woody-connell/" target="_blank">Github</Button>
                </Card.Body>
            </Card>
        </Row>
        <Row className="d-flex justify-content-center mt-5">

            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={guy} />
                <Card.Body>
                    <Card.Title>Dan Gelok</Card.Title>
                    <Card.Text>
                    Role: Front-end Development, UX
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/dgelok/" target="_blank">Github</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={guy} />
                <Card.Body>
                    <Card.Title>Chris David</Card.Title>
                    <Card.Text>
                    Role: Front-end Development, animations
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/CM-David/" target="_blank">Github</Button>
                </Card.Body>
            </Card>
        </Row>
    </Col>
    </Container>
    </>
  )
}

export default About
