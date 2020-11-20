import React, { Component } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import englishMasterImg from '../../images/englishMaster.png'

class EnglishMater extends Component {
    render() {
        return (
            <Container style={{ background: "AliceBlue", borderRadius: "20px" }}>
                <br/>
                <Row className="justify-content-md-center">
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'DarkSlateGray' }}>
                        English Master
                        </span>
                </Row>
                <Row>

                    <Col>
                        <br />
                        <br />
                        An online learning system that helps Vietnamese students to learn about the meaning, pronuniciation, usage of English words. A web crawling that crawls online articles everyday to collect data such as new word, meaning, example usage, etc.
                        <br />
                        <br />
                        Frontend: ReactJs
                        <br />
                        Backend: NodeJs to create Restful API, Dockers
                        <br />
                        <br />
                        A demo of this app can be found <a href="https://englishmaster.s3.amazonaws.com/index.html">in this link</a>
                        <br />
                        <a href="https://github.com/chuong2598/englishMaster">Click here to go to Github repo</a>

                    </Col>

                    <Col>
                        <br />
                        <Image height="300px" alt="cam" src={englishMasterImg} />
                    </Col>
                </Row>
                <br/>
            </Container>
        );
    }
}

export default EnglishMater;