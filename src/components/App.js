import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello World.
      </div>
    )
  }
}

// Return state from redux store as array so we can easily work with it as grid.
function mapStateToProps (calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  
  return {
    calendar: dayOrder.map((day) => ({
      day, 
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null
          
        return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps)(App)