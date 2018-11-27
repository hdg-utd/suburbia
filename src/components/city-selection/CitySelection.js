import React, { Component } from 'react'
import './CitySelection.css'

class CitySelection extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        const { cities } = this.props
        return (
            <div className="city-selection">
                {
                    cities.map((city, index) => <button>{city}</button>)
                }
            </div>
        )
    }
}

export default CitySelection