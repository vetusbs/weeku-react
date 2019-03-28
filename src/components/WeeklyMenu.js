import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import MenuForm from './MenuForm'
import DailyMenu from './DailyMenu'
import { fetchWeeklyPlan } from '../actions'
import {connect} from 'react-redux'
import {store} from '../';
import Button from '../containers/Button'

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
                  <MenuForm submitFunction={() => { this.props.handleClick(4) }}/>
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

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => { dispatch(fetchWeeklyPlan(4))}
})

WeeklyMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeeklyMenu)


export default WeeklyMenu
