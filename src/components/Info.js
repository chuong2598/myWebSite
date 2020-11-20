import React, { Component } from 'react';
import { Container, Row, Image } from 'react-bootstrap'
import "../css/info.css"
import avatar from "./../images/avatar.jpg"

class Info extends Component {
    render() {
        return (
            <div className="infoContainer">
                <Container>
                    <Row className="justify-content-md-center">
                        <Image height="250px" alt="cam" src={avatar} roundedCircle />
                    </Row>
                    <Row className="justify-content-md-center">
                        <span style={{ fontWeight: 'bold', fontSize: '24px', color: 'White'}} >
                            Hoang Chuong Nguyen
                        </span>
                    </Row>
                    <Row className="justify-content-md-center">
                        <hr style={{width:"30%", color:"white", border: "2px solid white"}}/>
                    </Row>
                    <Row className="justify-content-md-center">
                        <span style={{ontSize: '18px', color: 'White'}} >
                            Study Master of Advanced Computing at the ANU Univeristy
                        </span>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Info;