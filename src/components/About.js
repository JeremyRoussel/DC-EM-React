import React from 'react'
import {Card, Col, Row, Container} from 'react-bootstrap'
import woody from './images/woodyheadshot.jpg'
import jeremy from './images/jeremy.jpg'
import chris from './images/chris.jpg'
import dan from './images/Dan.png'

const About = () => {
  return (
    <>
    <Container>
    <Col className="col-8 offset-2">
        <Row className="d-flex justify-content-center mt-5">
            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={jeremy} />
                <Card.Body>
                    <Card.Title>Jeremy Roussel</Card.Title>
                    <Card.Text>
                    Role: Back-end Development, Architecture
                    </Card.Text>
                    <a href="https://www.linkedin.com/in/jeremyroussel/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;
                    <a href="https://github.com/JeremyRoussel" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>
                </Card.Body>
            </Card>
        

            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={woody} />
                <Card.Body>
                    <Card.Title>Woody Connell</Card.Title>
                    <Card.Text>
                    Role: Back-end Development, API handling
                    </Card.Text>
                    
                    <a href="https://www.linkedin.com/in/woody-connell/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;
                    <a href="https://github.com/woody-connell/" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>
                </Card.Body>
            </Card>
        </Row>
        <Row className="d-flex justify-content-center mt-5">

            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={dan} />
                <Card.Body>
                    <Card.Title>Dan Gelok</Card.Title>
                    <Card.Text>
                    Role: Front-end Development, UX
                    </Card.Text>
                    
                    <a href="https://www.linkedin.com/in/dangelok/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;
                    <a href="https://github.com/dgelok/" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={chris} />
                <Card.Body>
                    <Card.Title>Chris David</Card.Title>
                    <Card.Text>
                    Role: Front-end Development, animations
                    </Card.Text>
                    <a href="https://www.linkedin.com/in/chris-m-david/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;
                    <a href="https://github.com/CM-David/" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>
                    
                </Card.Body>
            </Card>
        </Row>
    </Col>
    </Container>
    </>
  )
}

export default About
