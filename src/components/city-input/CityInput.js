import React, { Component } from 'react'
import './CityInput.css'

class CityInput extends Component {
    render () {
        const { currentCity, currentSuburb } = this.props
        
        return (
            <div className="city-input">
                <h2>Current suburb: </h2>
                <input type="text" />
                <h2>Current major city: </h2>
                <input type="text" />
                <br />
                <button>Submit</button>
            </div>
        )    
    }
}

export default CityInput