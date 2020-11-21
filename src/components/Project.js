import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import EnglishMaster from './projects/EnglishMater'
import Elab from './projects/Elab';
import RouteCaster from './projects/RouteCaster';
import TextClassification from './projects/TextClassification';

import '../css/project.css'

class Project extends Component {

    render() {
        return (
            <div className="project-container">
                <Container >
                    <Row className="justify-content-md-center">
                        <span style={{fontWeight: 'bold', fontSize: '24px', color: 'DarkSlateGray'}}>
                            Projects
                        </span>
                    </Row>
                    <Row className="justify-content-md-center">
                        <hr style={{width:"15%", color:"white", border: "2px solid DarkSlateGray"}}/>
                    </Row>

                    <Row>
                        <EnglishMaster/>
                    </Row>
                    <br/><br/><br/>
                    <Row>
                        <Elab/>
                    </Row>
                    <br/><br/><br/>
                    <Row>
                        <RouteCaster/>
                    </Row>
                    <br/><br/><br/>
                    <Row>
                        <TextClassification/>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Project;