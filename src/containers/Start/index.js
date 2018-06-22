import React, { Component } from 'react'
import PopularList from '../../components/PopularList'
import Loader from '../../components/Loader'


class Start extends Component {

    state = {
        cities: [],
        citiesName: '',
        isFetching: false,
        
    }

    
    
    onCitiesInputChange = e => {
        this.setState({ citiesName: e.target.value, isFetching: true })
        
            // console.log(e.target.value);
        
    }

    componentDidMount(){
        fetch(`http://www-uat.tictactrip.eu/api/cities/popular/5`)
            .then(response => response.json())
            .then(json => this.setState({ cities:json, isFetching: false }))
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
                    !isFetching && <PopularList list={this.state.cities} />                
                }
            </div>
        )
    }
}

export default Start;