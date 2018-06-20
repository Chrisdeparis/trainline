import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cities from '../../containers/Cities'


const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Cities} />
            
        </Switch>
    )
    
}

export default Main