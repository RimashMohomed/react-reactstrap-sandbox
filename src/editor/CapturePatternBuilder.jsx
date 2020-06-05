import React, { Component } from 'react';
import { Row, Col, CustomInput, FormGroup, Toast, ToastHeader, ToastBody, Button, Badge } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import CaptureGroupBuilder from './CaptureGroupBuilder';

class CapturePatternBuilder extends Component {
    currentID = 0

    constructor(props) {
        super(props);

        // this.handleValidSubmit = this.handleValidSubmit.bind(this);
        // this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.addNewRule = this.addNewRule.bind(this);
        this.removeRule = this.removeRule.bind(this);
        this.addFirstGroup = this.addFirstGroup.bind(this);
        this.generateCapturePattern = this.generateCapturePattern.bind(this);

        this.state = {
            captureGroups: [{
                uuid: this.currentID,
                ref: React.createRef()
            }],
            pattern: undefined,
            output: undefined
        }

    }

    // handleValidSubmit(groupPattern) {
    //     console.log("CapturePatternBuilder::handleValidSubmit ", groupPattern);

    // }

    // handleInvalidSubmit(values) {
    //     console.log("CapturePatternBuilder::handleInvalidSubmit ", values);

    // }

    addFirstGroup() {
        console.log("CapturePatternBuilder::addFirstGroup");
        this.currentID = 0;
        this.setState({
            captureGroups: [{
                uuid: this.currentID,
                groups: React.createRef()
            }]
        })
    }

    generateCapturePattern() {
        let patternStr = "";
        const capture = [];
        this.state.captureGroups.map((captureGroup, index) => {
            patternStr +=  captureGroup.ref.current.state.pattern
            if(captureGroup.ref.current.state.capturePattern){
                capture.push(true);
            } else {
                capture.push(false);
            }
        })

        this.setState({
            pattern: patternStr
        })
        const tokens = this.props.text.match(new RegExp(patternStr), 'gi');
        tokens.shift();
        console.log("PA1 ", tokens);
        const value = tokens.map((token, index) =>{
            if(capture[index] === true){
                return token;
            }
        })
        console.log("PA2 ", value);
        this.setState({
            output:  value.join(' ')
        })
    }

    addNewRule(groupUUID) {
        // console.log("CapturePatternBuilder::addNewRule groupUUID", groupUUID, this.state.captureGroups)

        let nextGroupIndex = -1;
        for (let groupIndex = 0; groupIndex < this.state.captureGroups.length; groupIndex = groupIndex + 1) {
            if (this.state.captureGroups[groupIndex].uuid === groupUUID)
                nextGroupIndex = groupIndex + 1;
        }
        this.currentID++;
        this.state.captureGroups.splice(nextGroupIndex, 0, {
            uuid: this.currentID,
            ref: React.createRef()
        })

        this.setState({
            captureGroups: this.state.captureGroups
        })
    }

    removeRule(groupUUID) {
        // console.log("CapturePatternBuilder::removeRule groupUUID", groupUUID, this.state.captureGroups)

        let currentGroupIndex = -1;
        for (let groupIndex = 0; groupIndex < this.state.captureGroups.length; groupIndex = groupIndex + 1) {
            if (this.state.captureGroups[groupIndex].uuid === groupUUID)
                currentGroupIndex = groupIndex;
        }

        if (currentGroupIndex !== -1) {
            this.state.captureGroups.splice(currentGroupIndex, 1)
            this.setState({
                captureGroups: this.state.captureGroups
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.captureGroups.map((captureGroup, index) => (
                        <CaptureGroupBuilder ref={captureGroup.ref} key={captureGroup.uuid} groupUUID={captureGroup.uuid}
                            prefixOptions={[
                                {
                                    value: "Single Space",
                                    pattern: "\\s"
                                },
                                {
                                    value: "One or more Space",
                                    pattern: "\\s*"
                                }
                            ]}

                            postfixOptions={[
                                {
                                    value: "One or more Space",
                                    pattern: "\\s*"
                                },
                                {
                                    value: "String",
                                    pattern: "[a-z,A-Z]*"

                                },
                                {
                                    value: "Number",
                                    pattern: "[0-9,.]+"
                                },
                            ]}

                            // _handleValidSubmit={this.handleValidSubmit}
                            // _handleInvalidSubmit={this.handleInvalidSubmit}
                            _addNewRule={this.addNewRule}
                            _removeRule={this.removeRule}
                        ></CaptureGroupBuilder>
                    ))
                }
                <Row className="mb-2 mt-2 ml-2 mr-2" >
                    <Col>
                        <Button id="button-fluid"
                            onClick={this.state.captureGroups.length === 0 ?
                                this.addFirstGroup :
                                this.generateCapturePattern}>
                            {
                                this.state.captureGroups.length === 0 ? <FontAwesomeIcon icon={faPlus} /> : "Generate"

                            }
                        </Button>


                    </Col>
                </Row>
                <Row className="mb-2 mt-2 ml-2 mr-2">
                    <Col>
                        <Toast id="toast-fluid">
                            <ToastHeader>Pattern </ToastHeader>
                            <ToastBody>
                                {this.state.pattern}
                                {this.state.output}
                            </ToastBody>
                        </Toast>
                    </Col>                    
                </Row>
            </React.Fragment>
        );
    }
}

export default CapturePatternBuilder;