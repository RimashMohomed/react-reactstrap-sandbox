import React, { Component } from 'react';
import { Row, Col, CustomInput, FormGroup, Toast, ToastHeader, ToastBody, Button, Badge } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

class CaptureGroupBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            ruleList: props.ruleList
        }
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        
    }

  
    render() {
        return (
            <React.Fragment>
                <AvForm
                 onValidSubmit={this.handleValidSubmit}
                 onInvalidSubmit={this.handleInvalidSubmit}>
                    <Row>
                        <Col md="3" xs="12">
                            <FormGroup>
                                <AvField
                                    name="telegramMessage"
                                    type="select"
                                    value={this.state.telegramMessage}
                                    validate={{
                                        required: {
                                            value: true,
                                            errorMessage: 'Telegram Message is required'
                                        }
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="4" xs="12">
                            <FormGroup>
                                <AvField
                                    name="telegramMessage"
                                    type="text"
                                    value={this.state.telegramMessage}
                                    validate={{
                                        required: {
                                            value: true,
                                            errorMessage: 'Telegram Message is required'
                                        }
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3" xs="12">
                            <FormGroup>
                                <AvField
                                    name="telegramMessage"
                                    type="select"
                                    value={this.state.telegramMessage}
                                    validate={{
                                        required: {
                                            value: true,
                                            errorMessage: 'Telegram Message is required'
                                        }
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        {/* <Col md="1" xs="12">
                            <FormGroup>
                                <Button id="buttons-fluid" color={this.state.isLastRule ? "secondary" : "success"}>                                
                                    <CustomInput type="switch" id="dd" name="dd" label="Include" />
                                </Button>
                            </FormGroup>
                        </Col> */}
                        <Col md="1" xs="12">
                            <FormGroup>
                                <Button id={this.state.index} color="secondary" onClick={this.removeRule()}>Remove</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </AvForm>
            </React.Fragment>
        );
    }
}

export default CaptureGroupBuilder;