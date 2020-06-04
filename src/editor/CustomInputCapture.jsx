import React, { Component } from 'react';
import { InputGroup, Input } from "reactstrap";

class CustomInputCapture extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        console.log("VVVVVVV ", this.props.ref, event.target.value);
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <InputGroup>
                <Input value={this.state.value} onChange={this.handleChange} ref={this.props.myRef} placeholder={this.props.content}/>
            </InputGroup>
        )
    }
}

export default CustomInputCapture;
