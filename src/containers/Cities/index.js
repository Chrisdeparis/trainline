import React, { Component } from 'react'
import CitiesList from '../../components/CitiesList'
import Loader from '../../components/Loader'
import Intro from '../../components/Intro'


class Cities extends Component {

    state = {
        cities: [],
        citiesName: '',
        isFetching: false
    }
    
      
    
    onCitiesInputChange = e => {
        this.setState({ citiesName: e.target.value, isFetching: true })
        
        fetch(`http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ cities:json, isFetching: false }))
        
        fetch(`http://www-uat.tictactrip.eu/api/cities/popular/5`)
            .then(response => response.json())
            .then(json => this.setState({ cities:json, isFetching: false }))
            
        
    }

    
    

    render(){

        
        const { cities, citiesName, isFetching } = this.state;


        return (
        
            <div className="bloc-search">
                <Intro message="Quel est votre trajet ?" />
                <div className="search__field
                search__departure
                grouped-input--top
                required
                
                focus">
                    <input 
                        value={citiesName} 
                        type="text"
                        className="search__departure-input ember-text-field textfield station-text-field search__field--valid station-text-field-- search__input focus ember-view"
                        
                        onChange={this.onCitiesInputChange} />
                </div>
                { 
                    !isFetching && cities.length === 0 && citiesName.trim() === ''

                    
                }
                {
                    !isFetching && cities.length === 0 && citiesName.trim() !== ''
                    &&
                    <p>Aucune gare trouvée</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <CitiesList list={this.state.cities} />                
                }
            </div>
        )
    }
}

export default Cities;