import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class RegexBuilder extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="ml-lg-5" id="counter">
                    <Col md="6" xs="12">
                        <Row>
                            <Col xs="12" className="mt-4 pt-2">
                                <div className="bg-light shadow rounded p-4 pt-5 pb-5 text-center">
                                    <h2 className="mb-0">
                                        <span className="counter-value">
                                            {/* <NumberCounter end={this.props.countervalue[0]} delay={4} postFix="%"/> */}
                                        </span>
                                    </h2>
                                    <h5 className="counter-head">Happy Client</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default RegexBuilder;