import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import MenuForm from './components/MenuForm.js'

class App extends Component {
  render() {
    return (
      <WeeklyMenu />
    );
  }
}

class Meal extends React.Component {
    render() {
       return <td>{this.props.meal.dishes.map(dish => <p>{dish.name}</p>)}</td>
    }
}

class DailyMenu extends React.Component {

    render() {
        return (
            <tr>
                {this.props.dailyMenu.meals.map(
                    meal => <Meal meal={meal} />
                )}
            </tr>
        )
    }
}

class WeeklyMenu extends React.Component {

    constructor (props) {
        super(props)
        this.state = {historicalData: null}

        this.fetchMenu = this.fetchMenu.bind(this)
    }

    render() {
    console.log("render")
            return (
                <div className="app">
                  <MenuForm submitFunction={this.fetchMenu}/>
                  <div className="container">
                          <div className="row">
                            <div className="col s12 board">
                              <table border="1" id="simple-board">
                                 <tbody>
                      {this.state.historicalData ?
                        this.state.historicalData.weeklyPlan.weeklyMenu.dailyMenus.map(
                        dailyMenu=><DailyMenu dailyMenu={dailyMenu} />
                        )
                        : null
                      }
                                </tbody>
                               </table>
                            </div>
                          </div>
                        </div>
                </div>
            )
    }

      fetchMenu () {
        fetch('https://weeku.herokuapp.com/api/menu')
          .then(response => response.json())
          .then(response => this.setState({historicalData: response}))
          .catch(e => e)
      }
}

export default App;
