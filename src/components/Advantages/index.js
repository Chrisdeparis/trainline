import React, { Component } from 'react'

class Advantages extends Component {

    
    render() {
        return (
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
                
        )
    }
    

    
}

export default Advantages;