import React, { Component } from 'react';
import { Row, Col, CustomInput, FormGroup, Toast, ToastHeader, ToastBody, Button, Badge } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

import CapturePatternBuilder from './CapturePatternBuilder';

const myText = 'BUY #GBPUSD @1.83600\
Tp @ 1.84200\
Tp2 @ 1.84700\
 Buy 2 @1.82600\
TP @ 1.83600\
SL 1.81600'
class FieldDefBuilder extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            telegramMessage: undefined
        }
    }

    handleChange(event) {
        console.log("Event ", event)
        this.setState({
            telegramMessage: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div >
                <AvForm>
                    <Row className="mb-2 mt-2 ml-2 mr-2">
                        <Col md="6" xs="12">
                            <Toast id="toast-fluid">
                                <ToastHeader>Telegram Signal </ToastHeader>
                                <ToastBody>
                                    <FormGroup>
                                        <AvField
                                            name="telegramMessage"
                                            type="textarea"
                                            validate={{
                                                required: {
                                                    value: true,
                                                    errorMessage: 'Telegram Message is required'
                                                }
                                            }}
                                            onChange={this.handleChange}
                                            value={this.state.telegramMessage}
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
                 
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CapturePatternBuilder text={this.state.telegramMessage}></CapturePatternBuilder>
                        </Col>
                    </Row>

                </AvForm>
                </div>
            </React.Fragment>
        );
    }
}

export default FieldDefBuilder;

// {
//     this.state.isValid ?
//         this.state && this.state.outputMessageFields && this.state.outputMessageFields.map((field, index) =>
//             <span id="outgoing-field" key={index} className="btn btn-outline-secondary">{field.name}<Badge color="secondary" className="rounded ml-2">{field.value}</Badge> </span>)
//         : <span id="outgoing-field" className="btn btn-outline-danger">Validation Failed<Badge color="danger" className="rounded ml-2"><i className="fas fa-exclamation-triangle"></i></Badge> </span>
// }