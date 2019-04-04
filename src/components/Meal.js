import React, { Component } from 'react';
import '../App.css';
import Dish from './Dish'

class Meal extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      selected : false
	    };
	}

    render() {
       return (
            <div className={`grid-container-meal item${this.props.column}`}>
                {this.props.meal.dishes.map(
                    dish => <Dish onDrop={(e)=>{this.onDrop(e, "wip")}} dish={dish} 
                    onClick={(e) => this.props.onClick(e)}
                    />
                )}
            </div>
        )
    }
}

export default Meal;