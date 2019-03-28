import React from 'react'
import { connect } from 'react-redux'
import { fetchWeeklyPlan } from '../actions'


let Button = ({ handleClick, weeklyPlan }) => (
<button
  onClick={() => { handleClick(4) }}>
  Get top news
</button>
);

const mapStateToProps = (state) => ({ channel: state.weeklyPlan })
const mapDispatchToProps = { handleClick: fetchWeeklyPlan }
Button = connect(mapStateToProps,mapDispatchToProps)(Button)
export default Button;