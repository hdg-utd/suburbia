import React, { Component } from 'react'
import './App.css'

import CityInput from '../city-input/CityInput'
import CitySelection from '../city-selection/CitySelection'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: '',
      currentSuburb: '',
      cities: {
        'New York City': '',
        'Chicago': '',
        'Los Angeles': '',
        'Dallas': ''
      }
    }
    this.findEquivalentSuburbs = this.findEquivalentSuburbs.bind(this)
  }
  
  findEquivalentSuburbs = (suburb, city) => {
    
  }
  
  render() {
    const { cities, currentCity, currentSuburb } = this.state
    
    return (
      <div className="App">
        <CityInput currentCity={currentCity} currentSuburb={currentSuburb} />
        <CitySelection cities={cities} />
      </div>
    );
  }
}

export default App
