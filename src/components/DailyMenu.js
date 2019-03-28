import React, { Component } from 'react';
import Meal from './Meal'

class DailyMenu extends React.Component {

    render() {
        return (
        	<React.Fragment>
            <div className="grid-container-daily-menu item1">
                {this.props.dailyMenu.meals.map(
                    function(meal, count) {
                    	console.log(this);
                    	return <Meal meal={meal} column={(count % 2) + 1} onClick={this.props.onClick}/>
                	}
                , this)}
            </div>
            </React.Fragment>
        )
    }
}

export default DailyMenu;