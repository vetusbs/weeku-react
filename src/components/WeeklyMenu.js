import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import MenuForm from '../containers/MenuForm'
import DailyMenu from './DailyMenu'
import {connect} from 'react-redux'
import {store} from '../';

class WeeklyMenu extends React.Component {

    constructor (props) {
        super(props)
        this.state = {weeklyPlan: null}
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });
    }

    render() {
            return (
                <div className="app">
                  <MenuForm/>
                  <div className="container">
                          <div className="row">
                            <div className="col s12 board">
                              <div className="grid-container-weekly">
                                  { this.props.weeklyPlan.weeklyMenu ?
                                      this.props.weeklyPlan.weeklyMenu.dailyMenus.map(
                                      dailyMenu=>
                                      <DailyMenu 
                                        dailyMenu={dailyMenu} 
                                        onClick={() => this.handleClick()}/>
                                      )
                                    : null
                                  }
                               </div>
                            </div>
                          </div>
                        </div>
                </div>
            )
    }
}

const mapStateToProps = (state) => ({
  weeklyPlan: state.weeklyPlan,
  stateObject: state
})

WeeklyMenu = connect(
  mapStateToProps,
  null
)(WeeklyMenu)


export default WeeklyMenu
