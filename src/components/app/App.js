import React, { Component } from 'react'
import './App.css'

import CityInput from '../city-input/CityInput'
import CitySelection from '../city-selection/CitySelection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CityInput />
        <CitySelection />
      </div>
    );
  }
}

export default App
