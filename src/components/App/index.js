import React, { Component } from 'react';
import './App.css';
import Main from '../Main'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="application__header-container">
        <div className="application__header">
          <div data-help-filters="filter_personal filter_visitor" data-help-contexts="sticky" id="ember534" className="visitor-header ember-view"><div id="ember543" className="active ember-view">  <div id="ember550" className="header__logo header__logo--large ember-view"></div>
    </div>
    
    <ul className="header__account">
        <li className="header__account-item header__signup">
    <a href="/signup" id="ember551" className="header__signup-button ember-view">Créer un compte</a>    </li>
    
        <li className="header__account-item header__signin">
          <button className="header__signin-button" data-ember-action="" data-ember-action-583="583">Se connecter</button>
        </li>
    
    
      <li className="header__account-item header__help">
        <div id="ember586" className="help__menu ember-view"><a href="https://aide.trainline.fr/?_ga=2.80318292.250758285.1529414054-1272104947.1529414054" target="_blank" rel="noopener" className="header__link " data-ember-action="" data-ember-action-587="587">
      Aide
    </a>
    </div>
      </li>
    
      <li className="header__account-item header__language">
        <button id="ember594" className="header__country-button ember-view"><img src="https://assets.trainline.eu/assets/images/country-flags/fr-3f3d5b0b269d11f3a65fe5109e0ac701.svg" alt="France" />
    </button>
      </li>
    
        <li className="header__account-item header__currency">
          <button className="header__currency-button">EUR</button>
        </li>
    </ul>
    </div>
        </div>
      </div>
        <div className="container">
          <h1 className="open-home__title">Réservez vos billets de train et de bus. <br/>En France et en Europe.</h1>
          <h2 className="open-home__subtitle">Voyagez avec Trainline, leader indépendant de la vente de billets de train et de bus en Europe.</h2>
          <div>
          <div className="wrapper">
            <div className="box-r">
              <div className="search_title">

              
              </div>
            </div>
            <div className="box-l">
              <Main />
            </div>
            <div className="open-home-carriers__title--container">
              <h3 className="open-home-carriers__title">Ils nous font confiance. Nous vendons leurs billets.</h3>
            </div>
          </div>
          
        </div>

        </div>
        
        
        
      </div>
    );
  }
}

export default App;
