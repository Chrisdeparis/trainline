import React from 'react'
import Main from '../Main'


const Search = props => {
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
                     <Main />
                  </div>
                  <div className="search__field
                     search__arrival
                     grouped-input--bottom
                     required
                     awaiting-input
                     ">
                     <input tabindex="1" type="text" autocomplete="off" spellcheck="false" required="" placeholder="Saisissez votre gare d’arrivée…" id="ember703" className="search__arrival-input ember-text-field textfield station-text-field empty station-text-field-- search__input empty ember-view"/>
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
                     <input tabindex="1" type="button" value="" id="ember712" className="search__departure-date-input search__input empty ember-view"/><div className="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'z-index': 2, 'user-select': 'none', 'lineHeight': '20px', 'left': '36px', 'marginTop': '-30px'}}>Aller
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
                  <input tabindex="1" type="button" value="" id="ember716" className="search__return-date-input search__input empty ember-view"/><div className="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'z-index': '2', 'user-select': 'none', 'lineHeight': '20px', 'left': '36px', 'marginTop': '-30px'}}>Retour
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
      <input tabindex="1" type="button" value="1 Adulte (26 - 59)" id="ember722" className="search__participants-input passengers-field passengers-field__passengers--1 search__input ember-view"/><div className="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'z-index': 2, 'user-select': 'none', 'lineHeight': '20px', 'left': '36px', 'marginTop': '-30px', 'display': 'none'}}>Passagers</div>
      <button type="button" className="search__add-participants" data-ember-action="" data-ember-action-723="723">
      Sélectionner d’autres passagers
      </button>
      </div>
   </div>
   <a className="search__add-cui" data-ember-action="" data-ember-action-724="724">Utiliser un code de réduction</a>
   <div id="ember727" className="search__button progress-button ember-view"><button type="button" tabindex="1" className="button progress-button__button">
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
   <div className="ct-panel">
      <div id="ember732" className="landing-panel ember-view">
         <header className="landing-panel__header">
            <h3>Les petits plus de Trainline</h3>
         </header>
         <div className="landing-panel__content">
            <ul className="landing-panel__list">
               <li className="landing-panel__list-item">
                  <span className="icon--price"></span>
                  <div><b>Vos billets au meilleur prix</b><br/> Achetez vos billets aux prix fixés par les transporteurs, sans frais supplémentaires.</div>
               </li>
               <li className="landing-panel__list-item">
                  <span className="icon--loyalty-card"></span>
                  <div><b>Cartes de réduction</b><br/> Elles sont toutes acceptées, comme vos cartes de fidélité.</div>
               </li>
               <li className="landing-panel__list-item">
                  <span className="icon--payment"></span>
                  <div><b>Payez en toute sécurité</b><br/> CB, Amex, PayPal, Chèques-Vacances ANCV&nbsp;: c’est vous qui voyez.</div>
               </li>
            </ul>
            <div className="hr">
               <span>
               Distributeur agréé
               </span>
            </div>
            <div className="landing-panel__carriers landing-panel__carriers--4-items">
               <div className="landing-panel__carrier">
                  <div className="train-logo train-logo--sncf"></div>
               </div>
               <div className="landing-panel__carrier">
                  <div className="train-logo train-logo--ouigo"></div>
               </div>
               <div className="landing-panel__carrier">
                  <div className="train-logo train-logo--thalys"></div>
               </div>
               <div className="landing-panel__carrier">
                  <div className="train-logo train-logo--eurostar"></div>
               </div>
            </div>
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

export default Search;