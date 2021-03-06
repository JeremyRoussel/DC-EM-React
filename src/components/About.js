import React from 'react'
import {Card, Row, Container, Col} from 'react-bootstrap'
// import woody from './images/woodyheadshot.jpg'
// import jeremy from './images/Jeremy.png'
// import chris from './images/chris.jpg'
// import dan from './images/Dan.png'
import newWoody from './images/newWoody.png'
import newChris from './images/newChris.png'
import newJeremy from './images/newJeremy.png'
import newDan from './images/newDan.png'


const About = () => {
  return (
    <>
    <Container>

    <h3 className="m-5">Designed as part of <a href="https://www.digitalcrafts.com/" target="_blank" rel="noopener noreferrer">DigitalCraft</a> Houston's June 2020 Cohort, MegaMail is proudly presented as a capstone project utlizing React, Redux, Node.js, Bootstrap, Sendgrid, ElephantSQL, and many additional technologies. Check out our code on <a href="https://github.com/JeremyRoussel/DC-EM-React" target="_blank" rel="noopener noreferrer">Github!</a></h3>
        <Row className="d-flex justify-content-center mt-5">
            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={newJeremy} />
                <Card.Body>
                    <Card.Title>Jeremy Roussel</Card.Title>
                    <Card.Text>
                    Back-end Development, Architecture
                    </Card.Text>
                    <a href="https://www.linkedin.com/in/jeremyroussel/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt=""/></a>&nbsp;&nbsp;
                    <a href="https://github.com/JeremyRoussel" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt=""/></a>
                </Card.Body>
            </Card>
        

            <Card style={{ width: '15rem' }} className="m-2">
                <Card.Img variant="top" src={newWoody} />
                <Card.Body>
                    <Card.Title>Woody Connell</Card.Title>
                    <Card.Text>
                    Back-end Development, API handling
                    </Card.Text>
                    
                    <a href="https://www.linkedin.com/in/woody-connell/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt=""/></a>&nbsp;&nbsp;
                    <a href="https://github.com/woody-connell/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt=""/></a>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={newDan} />
                <Card.Body>
                    <Card.Title>Dan Gelok</Card.Title>
                    <Card.Text>
                    Front-end Development, UX
                    </Card.Text>
                    
                    <a href="https://www.linkedin.com/in/dangelok/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt=""/></a>&nbsp;&nbsp;
                    <a href="https://github.com/dgelok/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt=""/></a>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="m-1">
                <Card.Img variant="top" src={newChris} />
                <Card.Body>
                    <Card.Title>Chris David</Card.Title>
                    <Card.Text>
                    Front-end Development, animations
                    </Card.Text>
                    <a href="https://www.linkedin.com/in/chris-m-david/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt=""/></a>&nbsp;&nbsp;
                    <a href="https://github.com/CM-David/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt=""/></a>
                    
                </Card.Body>
            </Card>
        </Row>
    </Container>
    </>
  )
}

export default About
