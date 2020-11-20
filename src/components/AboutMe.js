import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'
import '../css/aboutMe.css'

class AboutMe extends Component {

    render() {
        return (
            <div>
                <Container className="about-me-container">
                    <Row className="justify-content-md-center">
                        <span style={{fontWeight: 'bold', fontSize: '24px', color: 'DarkSlateGray'}}>
                            About me
                        </span>
                    </Row>
                    <Row className="justify-content-md-center">
                        <hr style={{width:"15%", color:"white", border: "2px solid DarkSlateGray"}}/>
                    </Row>
                    <Row>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title >
                                        <Row className="justify-content-md-center">Achievements</Row>
                                    </Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Certificate of Best Performance in 2017 awarded by RMIT Vietnam</li>
                                            <li>RMIT Vietnam 2018 Academic Achievement Scholarship for Current Student</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title >
                                        <Row className="justify-content-md-center">Background</Row>
                                    </Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>
                                                I have graduated a bachelor of Information Technology at RMIT Vietnam in 2019. 
                                                During the period at RMIT Vietnam, I had a special interest in building and deploying a website using React/Redux framwork.

                                            </li>
                                            <li>
                                                I am currently doing a Master of Computing at the ANU univeristy. I just finished my second semester here and I am going to 
                                                take part in a research related to Computer Vision in my last year at the ANU.
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title >
                                        <Row className="justify-content-md-center">Interests</Row>
                                    </Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Software/Web Development</li>
                                            <li>Cloud Computing</li>
                                            <li>Machine Learning and Data Analystics</li>
                                            <li>Computer Vision</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutMe;