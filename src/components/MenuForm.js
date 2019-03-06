import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.props.submitFunction(this.state.value);
    event.preventDefault();
  }

  render() {
  console.log("menu render");
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

export default MenuForm
