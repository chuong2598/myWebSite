import React, { Component } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import elabImg from '../../images/elab.jpg'


class Elab extends Component {
    render() {
        return (
            <Container style={{ background: "AliceBlue", borderRadius: "20px" }}>
                <br/>
                <Row className="justify-content-md-center">
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'DarkSlateGray' }}>
                        Elab
                        </span>
                </Row>
                <Row>

                    <Col>
                        <br />
                        <Image height="275px" alt="cam" src={elabImg} />
                        <br/>
                        <br/>
                    </Col>

                    <Col>
                        <br />
                        <br />
                        Elab a cross-platform system developed for iOS, Android, Web that has four main features: audio call, video call, conferencing, and livestreaming. WebRTC is used as a technology for transfering media data between clients.
                        <br />
                        <br />
                        Frontend: React Native(mobile app version), ReactJs(web version)
                        <br />
                        Backend: JavaSrpingMVC
                        <br/>
                        Media server: WebRTC + Janus
                        <br />
                        <br />
                        <a href="https://github.com/chuong2598/communicationSystem">Click here to go to Github repo</a>

                    </Col>
                    
                </Row>
            </Container>
        );
    }
}

export default Elab;