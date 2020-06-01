import React, { Component } from 'react';
import { Row, Col, CustomInput, FormGroup, Toast, ToastHeader, ToastBody, Button, Badge, Label } from "reactstrap";
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class CaptureGroupBuilder extends Component {
    constructor(props) {
        super(props);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.addNewRule = this.addNewRule.bind(this);
        this.removeRule = this.removeRule.bind(this);

    }

    handleValidSubmit(event, values) {
        console.log("handleValidSubmit ", event, values);
        this.props._handleValidSubmit(values);
    }

    handleInvalidSubmit(event, values) {
        console.log("handleInvalidSubmit ",  event, values);
        this.props._handleInValidSubmit(this.props.groupUUID, values);
    }

    addNewRule(){
        console.log("addNewRule event triggered from");
        this.props._addNewRule(this.props.groupUUID);
    }

    removeRule(){
        console.log("removeRule");
        this.props._removeRule(this.props.groupUUID);
    }

    render() {
        return (
            <React.Fragment>
                <AvForm
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}>
                    
                    <Row>
                        <Col md="3" xs="12">
                            <AvGroup>
                                <AvField
                                    name={`groupPrefix-${this.props.groupUUID}`}
                                    type="select"
                                    value={this.props.groupPrefix}
                                >
                                    {
                                        this.props.prefixOptions.map((prefixOption, index)=>(
                                            <option key={index}>{prefixOption.value}</option>

                                        ))
                                    }
                                </AvField>
                            </AvGroup>
                        </Col>
                        <Col md="3" xs="12">
                            <AvGroup>
                                <AvField
                                    name={`groupText-${this.props.groupUUID}`}
                                    type="text"
                                    value={this.props.groupUUID}
                                />
                            </AvGroup>
                        </Col>
                        <Col md="3" xs="12">
                            <AvGroup>
                                <AvField
                                    name={`groupPostfix-${this.props.groupUUID}`}
                                    type="select"
                                    value={this.props.groupPostfix}
                                >
                                    {
                                        this.props.postfixOptions.map((postfixOption, index)=>(
                                            <option key={index}>{postfixOption.value}</option>

                                        ))
                                    }
                                </AvField>
                            </AvGroup>
                        </Col>
                        <Col md="3" xs="12">
                            <AvGroup>
                                <Row>
                                    <Col md="8" xs="8">
                                        <Button color="secondary">
                                            <AvInput tag={CustomInput} type="checkbox" name={`groupCaptured-${this.props.groupUUID}`} label="Capture" />
                                        </Button>
                                    </Col>
                                    <Col md="2" xs="2">
                                        <Button color="secondary" onClick={this.addNewRule}><FontAwesomeIcon icon={faPlus} /></Button>
                                    </Col>
                                    <Col md="2" xs="2">
                                        <Button color="secondary"  onClick={this.removeRule}><FontAwesomeIcon icon={faMinus} /></Button>
                                    </Col>
                                </Row>
                            </AvGroup>                     
                        </Col>
                    </Row>
                </AvForm>
            </React.Fragment>
        );
    }
}

export default CaptureGroupBuilder;