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
                <h2>Equivalent Suburb In </h2>
                { 
                    Object.keys(cities).map(city => {
                        return(<h3>{city}: {city[cities]}</h3>)
                    }) 
                }
            </div>
        )
    }
}

export default CitySelection