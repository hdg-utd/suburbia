import React, { Component } from 'react'
import './CityInput.css'

class CityInput extends Component {
    render () {
        return (
            <div className="city-input">
                <h2>Enter your current suburb: </h2>
                <input type="text" />
            </div>
        )    
    }
}

export default CityInput