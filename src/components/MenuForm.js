import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.submitFunction();
    event.preventDefault();
  }

  render() {
  console.log("menu render");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" />
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
