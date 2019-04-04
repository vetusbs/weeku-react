const INITIAL_STATE = {
  weeklyPlan: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_WEEKLY_PLAN":
      var id = 0;
      var menus = action.weeklyPlan.weeklyPlan.weeklyMenu.dailyMenus;
      var result = ( { dailyMenus: menus.map(function(menu) {
        return menu.meals.map(function(meal) {
          return meal.dishes.map(function(dish) {
            id ++;
            var dishWithId = ({ id: id, name: dish.name });
            return dishWithId;
          })
        })
      }) })
      console.log("--------- result");
      console.log(result);
      return Object.assign({}, state, {
        weeklyPlan: action.weeklyPlan.weeklyPlan
      })
    default:
      return state
  }
}