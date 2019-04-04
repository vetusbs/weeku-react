import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchWeeklyPlan } from '../actions'
import {connect} from 'react-redux'

class MenuForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.handleClick(this.state.value)
    event.preventDefault();
  }

  render() {
  console.log("menu render " + process.env.NODE_ENV);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          How many days you want to generate?
          <input type="number" value={this.state.value} pattern="[1-7]" inputmode="numeric" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

MenuForm.propTypes = {
  submitFunction: PropTypes.func
};

const mapStateToProps = (state) => ({
  weeklyPlan: state.weeklyPlan,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (numberOfDays) => { dispatch(fetchWeeklyPlan(numberOfDays))}
})

MenuForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuForm)

export default MenuForm
