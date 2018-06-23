import React, { Component } from 'react'
import Main from '../Main'
import Advantages from '../Advantages'
import Start from '../../containers/Start'
import ToggleDisplay from 'react-toggle-display'
import CitiesList from '../../components/CitiesList'
import Loader from '../../components/Loader'

class Search extends Component {

  state = {
    cities: [],
    citiesName: '',
    isFetching: false,
    show: true
  }
  

  handleClick(){
    this.setState({
        show: false
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
    <div className="application__body-container">
    <div className="application__body">
      <div id="ember642" className="open-home__header ember-view">
         <h1 className="open-home__title">Réservez vos billets de train et de bus. <br/>En France et en Europe.</h1>
         <h2 className="open-home__subtitle">Voyagez avec Trainline, leader indépendant de la vente de billets de train et de bus en Europe.</h2>
      </div>
      <div style={{'height': '554px'}} id="ember643" className="search__form--collapsible collapsible slow fade ember-view">  <div style={{'overflow': 'hidden'}} className="collapsible__measuring-div">
      <div data-help-contexts="tab_search" id="ember648" className="search__form ember-view">
         <div className="search__form--left split-panel--left
            ">
            <div className="search__title">
               Quel est votre trajet&nbsp;?
            </div>
           <form>
               <div className="search__section search__section--od">
                  <div className="search__field
                     search__departure
                     grouped-input--top
                     required
                     awaiting-input
                     ">
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
                 </div>
                  </div>
                  <div className="search__field
                     search__arrival
                     grouped-input--bottom
                     required
                     awaiting-input
                     ">
                     <input tabIndex="1" type="text" autoComplete="off" spellCheck="false" required="" placeholder="Saisissez votre gare d’arrivée…" id="ember703" className="search__arrival-input ember-text-field textfield station-text-field empty station-text-field-- search__input empty ember-view"/>
                  </div>
                  <button id="ember706" style={{'display': 'none'}} className="search__swap swap-button swap-button--in-between ember-view">
                  <div className="swap-button__equilibrium">
                     <span className="swap-button__label">Échanger les gares de départ et d’arrivée</span>
                  </div>
                  </button>
               </div>
               <div className="search__section search__section--date">
                  <div className="search__field
                     search__departure-date
                     grouped-input--top
                     ">
                     <input tabIndex="1" type="button" value="" id="ember712" className="search__departure-date-input search__input empty ember-view"/><div className="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'zIndex': 2, 'userSelect': 'none', 'lineHeight': '20px', 'left': '36px', 'marginTop': '-30px'}}>Aller
                  </div>
                  <div id="ember715" className="search__accessory empty ember-view"><span className="search__accessory-prefix">
                     à partir de
                     </span>
                  </div>
               </div>
               <div className="search__field
                  search__return-date
                  grouped-input--bottom
                  ">
                  <input tabIndex="1" type="button" value="" id="ember716" className="search__return-date-input search__input empty ember-view"/><div className="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'zIndex': '2', 'userSelect': 'none', 'lineHeight': '20px', 'left': '36px', 'marginTop': '-30px'}}>Retour
               </div>
               <div id="ember717" className="search__accessory empty ember-view"><span className="search__accessory-prefix">
                  à partir de
                  </span>
               </div>
         </div>
      </div>
      <div className="search__section search__section--participants">
      <div className="search__field
         search__participants
         required
         search__participants--constrain
         grouped-input--single
         ">
      <input tabIndex="1" type="button" value="1 Adulte (26 - 59)" id="ember722" className="search__participants-input passengers-field passengers-field__passengers--1 search__input ember-view"/><div className="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'zIndex': 2, 'userSelect': 'none', 'lineHeight': '20px', 'left': '36px', 'marginTop': '-30px', 'display': 'none'}}>Passagers</div>
      <button type="button" className="search__add-participants" data-ember-action="" data-ember-action-723="723">
      Sélectionner d’autres passagers
      </button>
      </div>
   </div>
   <a className="search__add-cui" data-ember-action="" data-ember-action-724="724">Utiliser un code de réduction</a>
   <div id="ember727" className="search__button progress-button ember-view"><button type="button" tabIndex="1" className="button progress-button__button">
   Rechercher
   </button>
   <div className="progress-button__bar">
   <div style={{'width':'0%'}}></div>
   </div>
   </div>  </form>
</div>


<div className="split-panel--right-container">
   <div className="search__form--right split-panel--right landing ">
      <div style={{'top': '-999px'}} className="split-panel__arrow">
        
      </div>
      <ToggleDisplay show={this.state.show}>
          
        <Advantages />
      </ToggleDisplay>
      
    <div className="search__form--right split-panel--right departure ">
    <div className="ct-panel">
      
      <div id="ember1244" className="ember-view">
        <h1 className="search__title">Choisissez une gare de départ</h1>
        <ul data-help-contexts="zone_origin_destination_selection" className="search__list
          search__stations--list
          has-selection" data-ember-action="" data-ember-action-1245="1245">
          <ToggleDisplay show={!this.state.show}>
          
            <Start />
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
          </ToggleDisplay>
        </ul>
        
        
        <button className="button--light search__list-button search__list-button--via search__via-icon">
        Via
        </button>
    </div>
</div>
    </div>
   
</div>
</div>
</div>
</div>
</div>    </div>
</div>
  )    
}
}

export default Search;