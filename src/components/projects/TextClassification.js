import React, { Component } from 'react';
import { Col, Container, Row, Form, Button, Spinner } from 'react-bootstrap';


class TextClassification extends Component {

    constructor(props){
        super(props)
        this.state = {sentence: null, prediction: -1, loading_result: false}
        this.result = ["negative", "postive"]
    }

    enterSentence = (e) => {
        this.setState({sentence: e.target.value})
    }

    predict = () => {
        if (this.state.sentence === "" || this.state.sentence === null){
            alert("Please enter a sentence")
            return
        }
        this.setState({prediction: -1})
        this.setState({loading_result: true})
        fetch(`http://sentimentclassification-env.eba-ur6pncmi.us-east-1.elasticbeanstalk.com/predict`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body : new URLSearchParams({
                'sentence': this.state.sentence
            }),
            method: "POST",
        })
        .then(res => res.json())
        .then((prediction) => {
            this.prediction = prediction
            this.setState({prediction: prediction.prediction})
            this.setState({loading_result: false})
        })
        .catch(() => {
            this.setState({loading_result: false})
        })
    }

    render() {
        return (
            <Container style={{ background: "AliceBlue", borderRadius: "20px" }}>
                <br />
                <Row className="justify-content-md-center">
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'DarkSlateGray' }}>
                        Sentiment Classifcaation
                        </span>
                </Row>

                <Row>

                    <Col>
                        <br />
                        <Form >
                            A Machine Learning model that helps to classify whether a sentence is positive or negative sentence.
                            <br/>
                            <br/>
                            Model: BERT
                            <br/>
                            API: Python (Flask framwork)
                            <br/>
                            <br/>
                            Enter a sentence to the text box below to classify a sentence.
                            <br/>
                            <br/>
                            <Form.Group controlId="formBasicEmail" >
                            <Form.Control type="text" placeholder="Enter a sentence" onChange={this.enterSentence}/>
                            </Form.Group>
                            {this.state.prediction !== -1 
                            ? 
                            <text style={{color:this.state.prediction===1?"green":"red"}}>The sentence is {this.result[this.state.prediction]}
                            <br/>
                            </text>
                            : null
                            }
                            
                        </Form>
                    </Col>
                </Row>
                <Row style={{alignContent:"center", justifyContent:"center"}}>
                
                <Button disabled={this.state.loading_result} style={{alignContent:"center", justifyContent:"center", width:"50%", display:"flex"}} variant="success" onClick={this.predict}>
                        {this.state.loading_result ? 
                        <span>
                            <Spinner size="sm" animation="border" variant="primary" /> &nbsp;
                            Please wait a moment...
                        </span>
                        : "Classify"}
                        </Button>
                </Row>
                <br />
            </Container>
        );
    }
}

export default TextClassification;