import React, { Component } from 'react';
import '../App.css';

class Dish extends React.Component {

	onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

	constructor(props) {
	    super(props);
	    this.state = {
	      selected : false
	    };
	    this.select = this.select.bind(this);
	}

	select(e) {
		this.setState({selected: !this.state.selected});
		this.props.onClick(e);
	}

    render() {
    	var className = "selected"
    	if (this.state.selected === true) {
      		className = "unselected";
    	}

       return 	<div 
       			className={`item1 ${className}`} 
       			draggable 
       			onClick={(e) => this.select(e)}
       			onDragStart = {(e) => this.onDragStart(e, this.props.dish.name)}
       			>
       				{this.props.dish.name}
       			</div>
    }
}

export default Dish;