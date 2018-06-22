import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cities from '../../containers/Cities'
import Start from '../../containers/Start'


const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Cities} />
            <Route exact path="/" component={Start} />
        </Switch>
    )
    
}

export default Main