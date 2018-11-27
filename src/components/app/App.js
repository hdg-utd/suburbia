import React, { Component } from 'react'
import './App.css'

import CityInput from '../city-input/CityInput'
import CitySelection from '../city-selection/CitySelection'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: ['New York City', 'Chicago', 'Los Angeles', 'Dallas']
    }
  }
  
  render() {
    const { cities } = this.state
    
    return (
      <div className="App">
        <CityInput />
        <CitySelection cities={cities} />
      </div>
    );
  }
}

export default App
