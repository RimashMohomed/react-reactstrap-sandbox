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

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.addNewRule = this.addNewRule.bind(this);
        this.removeRule = this.removeRule.bind(this);

        this.state = {
            captureGroups: [{
                uuid: this.currentID,
            }]
        }

    }

    handleValidSubmit(values) {
        console.log("CapturePatternBuilder::handleValidSubmit ", values);
        
    }

    handleInvalidSubmit(values) {
        console.log("CapturePatternBuilder::handleInvalidSubmit ", values);

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
        })

        this.setState({
            captureGroups: this.state.captureGroups
        })
    }

    removeRule(groupUUID) {
        console.log("CapturePatternBuilder::removeRule groupUUID", groupUUID, this.state.captureGroups)

        let currentGroupIndex = -1;
        for (let groupIndex = 0; groupIndex < this.state.captureGroups.length; groupIndex = groupIndex + 1) {
            if (this.state.captureGroups[groupIndex].uuid === groupUUID)
                currentGroupIndex = groupIndex;
        }
        
        if(currentGroupIndex !== -1) {
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
                        <CaptureGroupBuilder key={captureGroup.uuid} groupUUID={captureGroup.uuid} prefixOptions={[
                            {
                                value: "Single Space"
                            },
                            {
                                value: "One or more Spacee"
                            }
                        ]}

                            postfixOptions={[
                                {
                                    value: "One or more Space"
                                },
                                {
                                    value: "String"
                                },
                                {
                                    value: "Number"
                                },
                            ]}

                            _handleValidSubmit={this.handleValidSubmit}
                            _handleInvalidSubmit={this.handleInvalidSubmit}
                            _addNewRule={this.addNewRule}
                            _removeRule={this.removeRule}
                        ></CaptureGroupBuilder>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default CapturePatternBuilder;