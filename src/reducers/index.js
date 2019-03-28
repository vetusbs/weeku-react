const INITIAL_STATE = {
  weeklyPlan: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_WEEKLY_PLAN":
      return Object.assign({}, state, {
        weeklyPlan: action.weeklyPlan.weeklyPlan
      })
    default:
      return state
  }
}