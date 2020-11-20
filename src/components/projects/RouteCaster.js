import React, { Component } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import routeCasterImg from '../../images/routeCaster.gif'

class RouteCaster extends Component {
    render() {
        return (
            <Container style={{ background: "AliceBlue", borderRadius: "20px" }}>
                <br/>
                <Row className="justify-content-md-center">
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'DarkSlateGray' }}>
                        Route Caster
                        </span>
                </Row>
                <Row>

                    <Col>
                        <br />
                        <br />
                        <br />

                        Route Caster is an iOS application that could help friends to keep track of each other using GPS location while they are on a trip
                        <br />
                        <br />
                        Frontend: Swift
                        <br />
                        Backend: Firebase realtime database
                        <br />
                        <br />
                        <a href="https://github.com/chuong2598/routeCaster">Click here to go to Github repo</a>

                    </Col>

                    <Col>
                        <br />
                        <Image height="350px" alt="cam" src={routeCasterImg} />
                    </Col>
                </Row>
                <br/>

            </Container>
        );
    }
}

export default RouteCaster;