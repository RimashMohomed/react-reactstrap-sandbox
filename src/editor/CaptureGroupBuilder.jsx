import React, { Component } from 'react';
import { Row, Col, CustomInput, FormGroup, Toast, ToastHeader, ToastBody, Button, Badge, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import ExpressionBuilder from './ExpressionBuilder';
import CustomInputCapture from './CustomInputCapture';


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const cloneSymbol = (symbol, symbolCount) => {
    const symbolId = symbol['id'];
    const id = parseInt(symbolId.split('-')[1]);

    const newSymbol = { ...symbol }
    newSymbol['id'] = `item-${id + symbolCount}`

    // console.log("newSymbol ", newSymbol);
    return newSymbol;
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    sourceClone.splice(droppableSource.index, 0, cloneSymbol(removed, source.length));

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 6;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
});
class CaptureGroupBuilder extends Component {
    constructor(props) {
        super(props);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.addNewRule = this.addNewRule.bind(this);
        this.removeRule = this.removeRule.bind(this);

        this.state = {
            uuid: props.groupUUID,
            prefix: undefined,
            text: undefined,
            postfix: undefined,
            freezeGroup: false,
            capturePattern: undefined,
            items: this.symbols,
            selected: [{
                id: `item-0`,
                content: `Start`,
                editable: false,
                value: "",
                ref: React.createRef()
            }]
        }
    }



    handleValidSubmit(event, values) {
        // console.log("handleValidSubmit ", event, values);
        const groupCapturedId = `groupCaptured-${this.props.groupUUID}`;
        const freezeGroupId = `freezeGroup-${this.props.groupUUID}`;
        const customInputId = `customInput-${this.props.groupUUID}`;

        let pattern = ""
        this.state.selected.map((item, index) => {
            if(item.editable) {
                if(item.ref && item.ref.current && item.ref.current.props && item.ref.current.props.value !== "") {
                    console.log("Value Ref2 ", item.ref.current.props.value);
                    pattern +=  item.ref.current.props.value;

                } else {
                    console.log("Emty Ref2 ", item);    

                } 
            } else {
                pattern += item.value;
            }
        })

        this.setState({
            freezeGroup: values[freezeGroupId],
            pattern: `(${pattern})`
        })
    }

    handleInvalidSubmit(event, values) {
        console.log("handleInvalidSubmit ", event, values);
        // this.props._handleInValidSubmit(this.props.groupUUID, values);
    }

    addNewRule() {
        // console.log("addNewRule event triggered from");
        this.props._addNewRule(this.props.groupUUID);
    }

    removeRule() {
        // console.log("removeRule");
        this.props._removeRule(this.props.groupUUID);
    }

    symbols = [
        {
            id: `item-1`,
            content: `Space`,
            value: `\\\s*`,
            editable: false
        },
        {
            id: `item-2`,
            content: `Specific Text`,
            value: '',
            editable: true,
            type: "text"
        },
        {
            id: `item-3`,
            content: `Specific Number`,
            value: '',
            editable: true,
            type: "number"
        },
        {
            id: `item-4`,
            content: `Number`,
            value: '[0-9,.]+',
            editable: false

        },
        {
            id: `item-5`,
            content: `String`,
            value: '[a-z,A-Z]+',
            editable: false

        },
        {
            id: `item-6`,
            content: `OR`,
            value: '|',
            editable: false
        }
    ];

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            if (source.droppableId === 'droppable') {
                const result = move(
                    this.getList(source.droppableId),
                    this.getList(destination.droppableId),
                    source,
                    destination
                );

                this.setState({
                    items: result.droppable,
                    selected: result.droppable2
                });
            }
        }
    };


    render() {
        return (
            <React.Fragment>
                <AvForm
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}>

                    <Row className="mb-2 mt-2 ml-2 mr-2">
                        <Col md="10" xs="12">
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <Row>
                                    <Col>
                                        <Droppable droppableId="droppable" direction="horizontal">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}>
                                                    {this.state.items.map((item, index) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}>
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                    <AvGroup>

                                        <Droppable droppableId="droppable2" direction="horizontal">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}>
                                                    {this.state.selected.map((item, index) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}>
                                                                        {
                                                                           item['ref'] = React.createRef(),
                                                                        

                                                                    
                                                                        

                                                                        item.editable ? 
                                                                            <CustomInputCapture type={item.type} disabled={this.state.freezeGroup ? true : false} myRef={item.ref} placeholder={item.content}/>
                                                                            : item.content

                                                                        
                                                                    }
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                        </AvGroup>
                                    </Col>
                                </Row>


                            </DragDropContext>
                        </Col>
                        <Col md="2" xs="12">
                            <AvGroup >
                                <Row className="mb-2">
                                    <Col md="12" xs="12">
                                        <Button id="button-fluid" color="secondary">
                                            <AvInput disabled={this.state.freezeGroup ? true : false} tag={CustomInput} type="checkbox" name={`groupCaptured-${this.props.groupUUID}`} label="Capture" />
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col md="12" xs="12">
                                        <Button id="button-fluid" color="secondary">
                                            <AvInput disabled={this.state.freezeGroup ? true : false} tag={CustomInput} type="checkbox" name={`freezeGroup-${this.props.groupUUID}`} label="Freeze" />
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6" xs="6">
                                        <Button id="button-fluid" color="secondary" onClick={this.addNewRule}><FontAwesomeIcon icon={faPlus} /></Button>
                                    </Col>
                                    <Col md="6" xs="6">
                                        <Button id="button-fluid" color="secondary" onClick={this.removeRule}><FontAwesomeIcon icon={faMinus} /></Button>
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