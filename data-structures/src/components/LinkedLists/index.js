import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkedList } from '../../dataStructures';
import './LinkedLists.css';

const linkedList = new LinkedList();
export default class LinkedLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
            action: null,
        };
    }

    handleAddNode = () => {
        this.setState({ action: 'add' });
    }

    handleDeleteNode = () => {
        this.setState({ action: 'delete' });
    }

    handleDeleteNodeAtIndex = () => {
        this.setState({ action: 'deleteIndex' });
    }

    renderOptions = () => {
        const { value } = this.state;
        return (
            <div className='options'>
                <button className='action' onClick={this.handleAddNode}>Add Node</button>
                <button className='action' onClick={this.handleDeleteNode}>Delete Node</button>
                <button className='action' onClick={this.handleDeleteNodeAtIndex}>Delete At Index</button>
            </div>
        );
    }

    renderConosle = () => {
        if (!linkedList.lenght){
            return <p className='primaryText'> > linkedList.length = 0 - start modifying linked list...</p>
        }
        else {
            return <p className='defaultText'> > text </p>
        }
    }

    getLabel = () => {
        const { action } = this.state;

        switch(action){
            case 'add':
                return 'New node value:';
            case 'delete':
                return 'Value to be deleted:';
            case 'deleteIndex':
                return 'Node index to delete:';
            default:
                return '';
        }
    }

    render(){
        console.log(linkedList)
        const { value, action } = this.state;
        const label = this.getLabel();

        return (
            <div className='linkedListWrapper'>
                <div className='headerWrapper'>
                    <h3>Linked Lists</h3>
                    <div>{this.renderOptions()}</div>
                    <div>{label} &nbsp; <input value={value} onChange={(value) => this.setState({ value })}/></div>
                </div>
                <div className='resultsWrapper'>
                    <div className='results'>
                        {this.renderConosle()}
                    </div>
                </div>
            </div>
        )
    }
}
