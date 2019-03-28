import * as types from '../constants/types'

export function fetchWeeklyPlan(numberOfDays) {
  return function(dispatch) {
    return fetch(`${process.env.REACT_APP_API_URL}/api/menu?numberOfDays=${numberOfDays}`)
        .then(response => response.json())
        .then(json => dispatch(showWeeklyplan(json)))
  }
}
function showWeeklyplan(json) {
  return {
    type: types.SHOW_WEEKLY_PLAN,
    weeklyPlan: json
  }
}