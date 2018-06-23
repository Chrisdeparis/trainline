import React, { Component } from 'react'
import CitiesList from '../../components/CitiesList'
import Loader from '../../components/Loader'
import Advantages from '../../components/Advantages'


class Cities extends Component {

    state = {
        cities: [],
        citiesName: '',
        isFetching: false,
        show: true
    }


    handleClick(){
        console.log('clic input');

        this.setState({
            show: false,
        
        })
        
    }
    
    onCitiesInputChange = e => {
        this.setState({ citiesName: e.target.value, isFetching: true })
        
        fetch(`http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ cities:json, isFetching: false }))
        
        // fetch(`http://www-uat.tictactrip.eu/api/cities/popular/5`)
        //     .then(response => response.json())
        //     .then(json => this.setState({ cities:json, isFetching: false }))
        //     // console.log(e.target.value);
        
    }
    
    
   

    render(){

        const { cities, citiesName, isFetching } = this.state;

        

        return (
        
            <div className="bloc-search">
                
                <div className="search__field
                search__departure
                grouped-input--top
                required
                
                focus">
                    <input 
                        value={citiesName} 
                        type="text"
                        className="search__departure-input ember-text-field textfield station-text-field search__field--valid station-text-field-- search__input focus ember-view"
                        onClick={()=>this.handleClick()}
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