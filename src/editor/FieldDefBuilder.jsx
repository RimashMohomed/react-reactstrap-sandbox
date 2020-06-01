import React, { Component } from 'react';
import { Row, Col, CustomInput, FormGroup, Toast, ToastHeader, ToastBody, Button, Badge } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

import CaptureGroupBuilder from './CaptureGroupBuilder';

class FieldDefBuilder extends Component {
    render() {
        return (
            <React.Fragment>
                <AvForm>
                    <Row>
                        <Col md="6" xs="12">
                            <Toast id="toast-fluid">
                                <ToastHeader>Telegram Signal </ToastHeader>
                                <ToastBody>
                                    <FormGroup>
                                        <AvField
                                            name="telegramMessage"
                                            type="textarea"
                                            value={this.state.telegramMessage}
                                            validate={{
                                                required: {
                                                    value: true,
                                                    errorMessage: 'Telegram Message is required'
                                                }
                                            }}
                                        />
                                    </FormGroup>
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col md="6" xs="12">
                            {/* <ToolTip id="outgoing-message" message="Generated Message Routed to MT4" placement="bottom"/> */}
                            <Toast id="toast-fluid">
                                <ToastHeader>Trade Signal </ToastHeader>
                                <ToastBody>
                                    {
                                        this.state.isValid ?
                                            this.state && this.state.outputMessageFields && this.state.outputMessageFields.map((field, index) =>
                                                <span id="outgoing-field" key={index} className="btn btn-outline-secondary">{field.name}<Badge color="secondary" className="rounded ml-2">{field.value}</Badge> </span>)
                                            : <span id="outgoing-field" className="btn btn-outline-danger">Validation Failed<Badge color="danger" className="rounded ml-2"><i className="fas fa-exclamation-triangle"></i></Badge> </span>
                                    }
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {
                            this.state.ruleList.map((rule, index) => (
                                <CaptureGroupBuilder key={index} />
                            ))
                        }
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md="6" xs="12">
                            DD
                            </Col>
                        <Col md="3" xs="12">
                            <Button id="button-fluid">Evaluate</Button>
                        </Col>
                        <Col md="3" xs="12">
                            <Button id="button-fluid" onClick={this.addNextRule}>Add new rule</Button>
                        </Col>
                    </Row>

                </AvForm>
            </React.Fragment>
        );
    }
}

export default FieldDefBuilder;