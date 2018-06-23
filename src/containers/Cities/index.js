import React, { Component } from 'react'
import CitiesList from '../../components/CitiesList'

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
    
    
    
    
   

    render(){
        return(
            <div>

            </div>
        )
        
    }
}

export default Cities;