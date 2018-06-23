import React, { Component } from 'react';
import './App.css';
import Main from '../Main'
import Start from '../../containers/Start'
import Advantages from '../Advantages'
import Search from '../Search'

class App extends Component {

  constructor(){
    super()
    this.state = {
        ShowAdvantages : true
    }
  }

  operation(){
      this.setState({
          ShowAdvantages: false
      })
  }


  render() {
    return (
        <div className="App">
          <div className="ct__application application--responsive ct__index   fr background-fr">
            <div className="application__dialogs" data-ember-action="" data-ember-action-451="451">
              <div className="dialog__container">
                <div className="dialog__content">
                </div>
              </div>
            </div>
            <div id="ember456" className="ember-view"><div style={{height: '0px'}} id="ember461" className="notification collapsible collapsed ember-view"></div>
            </div>
            <div data-help-contexts="tab_home" className="application open-home transition-none">
              <div className="open-home__overlay"></div>
              <div className="open-home__cover"></div>
              <div className="application__header-container">
                <div className="application__header">
                  <div data-help-filters="filter_personal filter_visitor" data-help-contexts="sticky" id="ember534" className="visitor-header ember-view">
                    <div id="ember543" className="active ember-view">
                      <div id="ember550" className="header__logo header__logo--large ember-view"></div>
                    </div>
                    <ul className="header__account">
                      <li className="header__account-item header__signup">
                        <a href="/signup" id="ember551" className="header__signup-button ember-view">        Créer un compte
                        </a>
                      </li>
                      <li className="header__account-item header__signin">
                        <button className="header__signin-button" data-ember-action="" data-ember-action-583="583">
                          Se connecter
                        </button>
                      </li>
                      <li className="header__account-item header__help">
                        <div id="ember586" className="help__menu ember-view"><a href="https://aide.trainline.fr" rel="noopener" className="header__link " data-ember-action="" data-ember-action-587="587">
                          Aide
                        </a>
                        </div>
                      </li>
                      <li className="header__account-item header__language">
                        <button id="ember594" className="header__country-button ember-view"><img src="https://assets.trainline.eu/assets/images/country-flags/fr-3f3d5b0b269d11f3a65fe5109e0ac701.svg" alt="France"/>
                        </button>
                      </li>
                      <li className="header__account-item header__currency">
                        <button className="header__currency-button">EUR</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Search />
              <div id="ember717" className="ember-view">
                <div id="ember726" className="mobile-incentive generic ember-view">
                  <div className="mobile-incentive__wrapper">
                    <div className="mobile-incentive__content">
                      <h1 className="mobile-incentive__title">Réservez vos billets de train et de bus. <br/>En France et en Europe.</h1>
                      <span className="mobile-incentive__subtitle">Trainline marche encore mieux quand vous utilisez notre application.</span>
                      <div className="mobile-incentive__badges">
                        <div className="mobile-incentive__apps">
                          <a href="https://333834.measurementapi.com/serve?action=click&amp;publisher_id=333834&amp;site_id=119871" rel="noopener" data-ember-action="" data-ember-action-727="727">
                            <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Télécharger l’application Android"/>
                          </a>
                          <a href="https://333834.measurementapi.com/serve?action=click&amp;publisher_id=333834&amp;site_id=119875" rel="noopener" data-ember-action="" data-ember-action-728="728">
                            <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger l’application iPhone et iPad"/>
                          </a>
                        </div>
                        <button type="button" className="mobile-incentive__mweb" data-ember-action="" data-ember-action-729="729">Ou continuer sur notre site mobile.</button>
                      </div>
                      <div className="mobile-incentive__arrow"></div>
                    </div>
                  </div>
                </div>
                <section className="open-home__main">
                  <article className="open-home__carriers">
                    <div id="ember732" className="ember-view">
                      <div className="open-home-carriers__title--container open-home__content">
                        <h3 className="open-home-carriers__title">Ils nous font confiance. Nous vendons leurs billets.</h3>
                      </div>
                      <div className="open-home-carriers__logos">
                        <div className="open-home__content">
                          <div className="open-home-carriers--primary">
                            <div className="open-home-carriers__logo">
                              <div title="SNCF" className="train-logo train-logo--sncf"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="OUIGO" className="train-logo train-logo--ouigo"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="OUIBUS" className="train-logo train-logo--ouibus"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Thalys" className="train-logo train-logo--thalys"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Eurostar" className="train-logo train-logo--eurostar"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Lyria" className="train-logo train-logo--lyria"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Deutsche&nbsp;Bahn" className="train-logo train-logo--db"></div>
                            </div>
                          </div>
                          <div className="open-home-carriers--secondary">
                            <div className="open-home-carriers__logo">
                              <div title="Trenitalia" className="train-logo train-logo--trenitalia"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Thello" className="train-logo train-logo--thello"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Italo" className="train-logo train-logo--italo"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="Renfe" className="train-logo train-logo--renfe"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="SNCB" className="train-logo train-logo--sncb"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="NS" className="train-logo train-logo--ns"></div>
                            </div>
                            <div className="open-home-carriers__logo">
                              <div title="" className="train-logo train-logo--cff"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="open-home__intro">
                    <div className="open-home__content">
                      <h2>Tous les billets. Un seul guichet.</h2>
                      <p>Nous vendons tous les billets que vous avez l’habitude d’acheter en France <br/>et tous ceux dont vous pourriez avoir besoin à l’étranger.</p>
                    </div>
                  </article>
                  <article className="open-home__arguments">
                    <div className="open-home__argument">
                      <div className="open-home-argument__illu open-home-argument__illu--first"></div>
                      <div className="open-home-argument__text">
                        <div className="text">
                          <h2>C’est simple et c’est tout.</h2>
                          <p>Consultez les horaires des trains et le prix des billets dans une interface claire. Nous comparons les prix de plusieurs transporteurs, pour que vous n’ayez pas à le faire.</p>
                        </div>
                      </div>
                    </div>
                    <div className="open-home__argument">
                      <div className="open-home-argument__illu open-home-argument__illu--second"></div>
                      <div className="open-home-argument__text">
                        <div className="text">
                          <h2>La très grande vitesse. Dès l’achat du billet.</h2>
                          <p>Trouvez et payez vos billets sur notre site en moins de temps qu’il n’en faut pour perdre patience sur un site ordinaire. Soit à peu près 58 secondes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="open-home__argument">
                      <div className="open-home-argument__illu open-home-argument__illu--third"></div>
                      <div className="open-home-argument__text">
                        <div className="text">
                          <h2>Sans pub et sans reproche.</h2>
                          <p>En choisissant de ne vendre que des billets, nous avons dû laisser certaines choses de côté, comme les publicités, les messages et les erreurs incompréhensibles.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="open-home__features">
                    <div className="open-home__content">
                      <h2>Comment ça marche&nbsp;?</h2>
                      <div className="open-home__features--half">
                        <h3>Paiement</h3>
                        <div className="open-home__features--table">
                          <img src="https://assets.trainline.eu/assets/images/open-home/icons/cards-cc4ccb22567fa0fec204e7aaae7a3f8b.svg" width="139" height="95" className="icon-cards" alt="credit cards"/>
                          <div className="or">Ou</div>
                          <img src="https://assets.trainline.eu/assets/images/open-home/icons/paypal-d4915d56d6160a55c7888417ae53a658.svg" width="110" height="34" className="icon-paypal" alt="paypal logo"/>
                        </div>
                        <p>Nous soignons et sécurisons vos achats <br/>comme s’ils n’avaient pas de prix.</p>
                      </div>
                      <div className="open-home__features--half">
                        <h3>Billets</h3>
                        <div className="open-home__features--table">
                          <img src="https://assets.trainline.eu/assets/images/open-home/icons/tickets-5842361da60d84a811b13651729c7b2b.svg" width="120" height="85" className="icon-tickets" alt="tickets"/>
                          <div className="or">Ou</div>
                          <img src="https://assets.trainline.eu/assets/images/open-home/icons/eticket-89bda370d79334ab48d0b16eebe40764.svg" width="90" height="95" className="icon-eticket" alt="etickets"/>
                        </div>
                        <p>Vous obtenez un billet cartonné à retirer en gare <br/>ou un e-billet à imprimer chez vous.</p>
                      </div>
                    </div>
                  </article>
                  <article className="open-home__bus-teaser">
                    <h2>Allez-y (aussi) en bus</h2>
                    <p className="open-home__bus-teaser__description">Nous vendons également des billets de bus pour que vous ayez le choix, sans l’embarras.</p>
                    <img src="https://assets.trainline.eu/assets/images/open-home/icons/bus_teaser-b029eca7372f7fcae1eaf703f3f598b7.svg" alt="Bus ticket sale teaser"/>
                  </article>
                  <article className="open-home__testimonials">
                    <div className="open-home__content">
                      <h2>Demandez conseil à nos utilisateurs.</h2>
                      <p>Tout le marketing du monde ne remplacera jamais ce que nos utilisateurs disent de nous. <br/>C’est encore eux qui parlent le mieux de notre service.</p>
                    </div>
                    <div id="ember769" className="ember-view">
                      <div className="open-home__tweets--container open-home__content">
                        <ul className="open-home__tweets">
                          <li className="open-home__tweet">
                            <div id="ember1042" className="ember-view">
                                {/* <twitterwidget className="twitter-tweet twitter-tweet-rendered" id="twitter-widget-0" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'maxWidth': '100%', 'width': '320px', 'minWidth': '220px', 'marginTop': '10px', 'marginBottom': '10px'}} data-tweet-id="970718910927564801"></twitterwidget> */}
                            </div>
                          </li>
                          <li className="open-home__tweet">
                            <div id="ember1044" className="ember-view">
                                {/* <twitterwidget className="twitter-tweet twitter-tweet-rendered" id="twitter-widget-1" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'maxWidth': '100%', 'width': '320px', 'minWidth': '220px', 'marginTop': '10px', 'marginBottom': '10px'}} data-tweet-id="970714467490254848"></twitterwidget> */}
                            </div>
                          </li>
                          <li className="open-home__tweet">
                            <div id="ember1046" className="ember-view">
                                {/* <twitterwidget className="twitter-tweet twitter-tweet-rendered" id="twitter-widget-2" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'maxWidth': '100%', 'width': '320px', 'minWidth': '220px', 'marginTop': '10px', 'marginBottom': '10px'}} data-tweet-id="968515258179641345"></twitterwidget> */}
                            </div>
                          </li>
                        </ul>
                        <div style={{'height': '0px'}} id="ember774" className="collapsible collapsed slow ember-view">
                        </div>
                        <a href="" className="tweets__load-more " data-ember-action="" data-ember-action-775="775">
                          Plus d’amour…
                        </a>
                      </div>
                    </div>
                    <div id="ember778" className="ember-view">  <div className="open-home__press">
                      <div className="open-home__content">
                        <a href="https://www.trainline.fr/press" className="open-home-press__link">
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/france2-426c29639e964b6b8131b2234de3fa0e.png" alt="france2" className="open-home-press__logo open-home-press__logo--france2"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/20min-dee5c2ef164835bc76e9bf418954ce06.png" alt="20min" className="open-home-press__logo open-home-press__logo--20min"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/canalplus-3b6414c4f6fead5711bf008ec8f09c21.png" alt="canalplus" className="open-home-press__logo open-home-press__logo--canalplus"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/challenges-d3f3161570179835b0735642742763ef.png" alt="challenges" className="open-home-press__logo open-home-press__logo--challenges"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/figaro-13b783c88bd90131113156f4028dfee5.png" alt="figaro" className="open-home-press__logo open-home-press__logo--figaro"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/lci-0e0a2cba409560b2eb6b9e7563930181.png" alt="lci" className="open-home-press__logo open-home-press__logo--lci"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/lemonde-bb82c17ccd314dffc91373f3d72104fb.png" alt="lemonde" className="open-home-press__logo open-home-press__logo--lemonde"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/ouifm-62b6adbb090d1496b440ba9ce15873f3.png" alt="ouifm" className="open-home-press__logo open-home-press__logo--ouifm"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/parisien-5ff202730d637a2c595eeb976c133c40.png" alt="parisien" className="open-home-press__logo open-home-press__logo--parisien"/>
                          <img src="https://assets.trainline.eu/assets/images/open-home/press/techcrunch-55076242894a2d1ff551f1f6765f5ef7.png" alt="techcrunch" className="open-home-press__logo open-home-press__logo--techcrunch"/>
                        </a>
                      </div>
                    </div>
                    </div>
                  </article>
                  <article className="open-home__get-on-board">
                    <div className="open-home__content">
                      <h2>Montez à bord&nbsp;!</h2>
                      <p>Arrêtez de vous prendre la tête. Prenez le train.</p>
                      <button type="button" className="button" data-ember-action="" data-ember-action-789="789">Réservez un billet</button>
                    </div>
                  </article>
                </section>
              </div>
              <div id="ember792" className="ember-view">
                <div id="ember797" className="ember-view">
                  <footer className="tle tle-footer">
                    <div className="tle-footer-upper">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-4 visible-xs tle-footer-app">
                            <div className="tle-footer-app-cta">
                              <div className="tle-footer-icons">
                                <a href="https://itunes.apple.com/fr/app/id599502670">
                                  <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger dans l’App Store"/>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.capitainetrain.android&amp;hl=fr">
                                  <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Disponible sur Google Play"/>
                                </a>
                              </div>
                              <div className="tle-footer-textbox">
                                <p>Chaque mois, plus de 16,5 millions de personnes visitent les sites ou applications Trainline. <a href="https://www.trainline.fr/information/trainline-eu-app">Téléchargez l’app</a>.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-6 tle-footer-company-info">
                            <div className="row">
                              <div className="col-md-12 col-xs-6">
                                <div className="tle-footer-spacer">
                                  <img src="https://assets.trainline.eu/assets/images/trainline-logo-cf635433ef235d4f4eb00da841ad174c.svg" alt="Trainline" className="tle-footer-logo"/>
                                </div>
                                <ul>
                                  <li><a href="https://www.trainline.fr/contact">Contacter Trainline</a></li>
                                  <li><a href="https://aide.trainline.fr/">Site d’aide</a></li>
                                  <li><a href="https://www.trainline.fr/about/us">Qui sommes-nous&nbsp;?</a></li>
                                  <li>
                                    <a href="https://www.trainline.fr/press">Informations presse</a>
                                    <span className="tle-footer-ampersand">&amp;</span>
                                    <a href="https://blog.trainline.fr/">Blog</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-12 col-xs-6">
                                <ul>
                                  <li><a href="https://www.trainline.fr/business">Pour les entreprises</a></li>
                                  <li><a href="https://www.trainline.fr/jobs">Offres d’emploi</a></li>
                                  <li>
                                    <a href="https://www.trainline.fr/terms">CGV</a>
                                    <span className="tle-footer-ampersand">&amp;</span>
                                    <a href="https://www.trainline.fr/legal-information">Informations légales</a>
                                  </li>
                                  <li>
                                    <a href="https://www.trainline.fr/privacy-policy">Données personnelles</a>
                                    <span className="tle-footer-ampersand">&amp;</span>
                                    <a href="https://www.trainline.fr/cookies">Cookies</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-6 hidden-xs tle-footer-app">
                            <div className="tle-footer-app-cta">
                              <div className="tle-footer-spacer"></div>
                              <div className="tle-footer-icons visible-sm">
                                <a href="https://itunes.apple.com/fr/app/id599502670">
                                  <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger dans l’App Store"/>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.capitainetrain.android&amp;hl=fr">
                                  <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Disponible sur Google Play"/>
                                </a>
                              </div>
                              <div className="tle-footer-textbox">
                                <p>Chaque mois, plus de 16,5 millions de personnes visitent les sites ou applications Trainline. <a href="https://www.trainline.fr/information/trainline-eu-app">Téléchargez l’app</a>.</p>
                              </div>
                              <div className="tle-footer-icons hidden-sm">
                                <a href="https://itunes.apple.com/fr/app/id599502670">
                                  <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger dans l’App Store"/>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.capitainetrain.android&amp;hl=fr">
                                  <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Disponible sur Google Play"/>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="row">
                              <div className="visible-xs-block visible-sm-block col-xs-12">
                                <div id="tle-footer-accordion" className="tle-footer-accordion-folder">
                                  <img src="https://assets.trainline.eu/assets/images/carat-26847c2616f102a474af23f1cb282d20.svg" alt="Plus d’informations" className="tle-footer-accordion-carat "/>
                                  <div className="tle-footer-accordion-header ">
                                    <span>Destinations ∙ Horaires de train</span>
                                    <span className="tle-footer-accordion-disappearing-dot"> ∙ </span>
                                    <span className="visible-xs-block visible-sm-inline">Stations ∙ Voyager en train</span>
                                  </div>
                                </div>
                              </div>
                              <div className="tle-footer-train-links tle-footer-toggled">
                                <nav itemScope="" itemType="http://schema.org/SiteNavigationElement" className="col-sm-3 col-xs-6">
                                  <ul>
                                    <li itemProp="name">
                                      <h4><a href="https://www.trainline.fr/destinations" itemProp="url">Destinations</a></h4>
                                    </li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-paris" itemProp="url">Trains pour Paris</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-lyon" itemProp="url">Trains pour Lyon</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-nice" itemProp="url">Trains pour Nice</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-marseille" itemProp="url">Trains pour Marseille</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-bordeaux" itemProp="url">Trains pour Bordeaux</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-toulouse" itemProp="url">Trains pour Toulouse</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/destinations/trains-pour-montpellier" itemProp="url">Trains pour Montpellier</a></li>
                                  </ul>
                                </nav>
                                <nav itemScope="" itemType="http://schema.org/SiteNavigationElement" className="col-sm-3 col-xs-6">
                                  <ul>
                                    <li itemProp="name">
                                      <h4><a href="https://www.trainline.fr/horaires-train" itemProp="url">Horaires</a></h4>
                                    </li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/paris-a-marseille" itemProp="url">Paris – Marseille</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/marseille-a-paris" itemProp="url">Marseille – Paris</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/paris-a-lyon" itemProp="url">Paris – Lyon</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/paris-a-bordeaux" itemProp="url">Paris – Bordeaux</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/paris-a-toulouse" itemProp="url">Paris – Toulouse</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/paris-a-lille" itemProp="url">Paris – Lille</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/horaires-train/paris-a-london" itemProp="url">Paris – Londres</a></li>
                                  </ul>
                                </nav>
                                <nav itemScope="" itemType="http://schema.org/SiteNavigationElement" className="col-sm-3 col-xs-6">
                                  <ul>
                                    <li itemProp="name">
                                      <h4><a href="https://www.trainline.fr/gares" itemProp="url">Gares</a></h4>
                                    </li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/paris-gare-du-nord" itemProp="url">Paris Gare du Nord</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/paris-gare-de-lyon" itemProp="url">Paris Gare de Lyon</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/paris-gare-montparnasse" itemProp="url">Paris Gare Montparnasse</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/paris-gare-de-lest" itemProp="url">Paris Gare de l’Est</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/lyon-part-dieu" itemProp="url">Lyon Part-Dieu</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/paris-gare-st-lazare" itemProp="url">Paris Gare St-Lazare</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/gares/marseille-st-charles" itemProp="url">Marseille St-Charles</a></li>
                                  </ul>
                                </nav>
                                <nav itemScope="" itemType="http://schema.org/SiteNavigationElement" className="col-sm-3 col-xs-6">
                                  <ul>
                                    <li itemProp="name">
                                      <h4><a href="https://www.trainline.fr/information" itemProp="url">Voyager en train</a></h4>
                                    </li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/information/cartes-abonnements-de-train" itemProp="url">Cartes &amp; abonnements SNCF</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/information/les-trains-en-france" itemProp="url">Trains en France</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/information/trains-en-espagne" itemProp="url">Trains en Espagne</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/information/trains-en-italie" itemProp="url">Trains en Italie</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/information/trains-en-allemagne" itemProp="url">Trains en Allemagne</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.fr/information/interrail" itemProp="url">Pass Interrail</a></li>
                                    <li itemProp="name"><a href="https://www.trainline.eu/information/eurostar" itemProp="url">Eurostar</a></li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tle-footer-lower">
                      <div className="container">
                        <div className="row">
                          <div className="col-xs-3 col-sm-4 tle-footer-social hidden-xs">
                            <h5>Suivez-nous</h5>
                            <a href="https://www.facebook.com/trainline.fr"><img src="https://assets.trainline.eu/assets/images/footer/seo/facebook-845e0f46ff9016203d5e6786a33396f2.svg" alt="Facebook"/></a>
                            <a href="https://twitter.com/trainline_fr"><img src="https://assets.trainline.eu/assets/images/footer/seo/twitter-e23662441d4b97c1639c49bb44f7388a.svg" alt="Twitter"/></a>
                          </div>
                          <div className="col-sm-6 hidden-xs"></div>
                          <div className="col-xs-12 col-sm-8 tle-footer-pay-logos">
                            <img src="https://assets.trainline.eu/assets/images/footer/seo/apple-pay-logo-9ae0cfc509e5cdfb136913a153b7043e.svg" alt="Apple Pay"/>
                            <img src="https://assets.trainline.eu/assets/images/footer/seo/paypal-logo-cc1f95a91a1f56b951a3b6d89c8a9e86.svg" alt="PayPal"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
              <div style={{'top': '60px'}} id="ember828" className="help__panel help__panel--hidden ember-view"></div>
              <div style={{'':''}} id="ember831" className="currency-switcher-overlay currency-switcher-overlay--hidden ember-view">
                <div id="ember836" className="currency-switcher ember-view">
                  <div className="currency-switcher__region">
                    <h2 className="currency-switcher__header">Europe</h2>
                    <label title="Couronnes tchèques (Kč)" className="currency-switcher__radio ">
                      <input type="radio" value="CZK" id="ember848" className="ember-view"/>
                      <div className="currency-switcher__code">CZK</div>
                      <span className="currency-switcher__label">Couronnes tchèques</span>
                      <small>(Kč)</small>
                    </label>
                    <label title="Couronnes danoises (kr)" className="currency-switcher__radio ">
                      <input type="radio" value="DKK" id="ember851" className="ember-view"/>
                      <div className="currency-switcher__code">DKK</div>
                      <span className="currency-switcher__label">Couronnes danoises</span>
                      <small>(kr)</small>
                    </label>
                    <label title="Euros (€)" className="currency-switcher__radio checked">
                      <input type="radio" value="EUR" id="ember854" className="ember-view"/>
                      <div className="currency-switcher__code">EUR</div>
                      <span className="currency-switcher__label">Euros</span>
                      <small>(€)</small>
                    </label>
                    <label title="Livres sterling (£)" className="currency-switcher__radio ">
                      <input type="radio" value="GBP" id="ember857" className="ember-view"/>
                      <div className="currency-switcher__code">GBP</div>
                      <span className="currency-switcher__label">Livres sterling</span>
                      <small>(£)</small>
                    </label>
                    <label title="Couronnes norvégiennes (kr)" className="currency-switcher__radio ">
                      <input type="radio" value="NOK" id="ember860" className="ember-view"/>
                      <div className="currency-switcher__code">NOK</div>
                      <span className="currency-switcher__label">Couronnes norvégiennes</span>
                      <small>(kr)</small>
                    </label>
                    <label title="Zlotys polonais (zł)" className="currency-switcher__radio ">
                      <input type="radio" value="PLN" id="ember863" className="ember-view"/>
                      <div className="currency-switcher__code">PLN</div>
                      <span className="currency-switcher__label">Zlotys polonais</span>
                      <small>(zł)</small>
                    </label>
                    <label title="Roubles russes (₽)" className="currency-switcher__radio ">
                      <input type="radio" value="RUB" id="ember866" className="ember-view"/>
                      <div className="currency-switcher__code">RUB</div>
                      <span className="currency-switcher__label">Roubles russes</span>
                      <small>(₽)</small>
                    </label>
                    <label title="Couronnes suédoises (kr)" className="currency-switcher__radio ">
                      <input type="radio" value="SEK" id="ember869" className="ember-view"/>
                      <div className="currency-switcher__code">SEK</div>
                      <span className="currency-switcher__label">Couronnes suédoises</span>
                      <small>(kr)</small>
                    </label>
                    <label title="Francs suisses" className="currency-switcher__radio ">
                      <input type="radio" value="CHF" id="ember872" className="ember-view"/>
                      <div className="currency-switcher__code">CHF</div>
                      <span className="currency-switcher__label">Francs suisses</span>
                    </label>
                  </div>
                  <div className="currency-switcher__region">
                    <h2 className="currency-switcher__header">Asie&nbsp;–&nbsp;Pacifique</h2>
                    <label title="Dollars australiens ($)" className="currency-switcher__radio ">
                      <input type="radio" value="AUD" id="ember876" className="ember-view"/>
                      <div className="currency-switcher__code">AUD</div>
                      <span className="currency-switcher__label">Dollars australiens</span>
                      <small>($)</small>
                    </label>
                    <label title="Yens japonais (¥)" className="currency-switcher__radio ">
                      <input type="radio" value="JPY" id="ember879" className="ember-view"/>
                      <div className="currency-switcher__code">JPY</div>
                      <span className="currency-switcher__label">Yens japonais</span>
                      <small>(¥)</small>
                    </label>
                    <label title="Yuans chinois (¥)" className="currency-switcher__radio ">
                      <input type="radio" value="CNY" id="ember882" className="ember-view"/>
                      <div className="currency-switcher__code">CNY</div>
                      <span className="currency-switcher__label">Yuans chinois</span>
                      <small>(¥)</small>
                    </label>
                  </div>
                  <div className="currency-switcher__region">
                    <h2 className="currency-switcher__header">Amérique</h2>
                    <label title="Pesos argentins ($)" className="currency-switcher__radio ">
                      <input type="radio" value="ARS" id="ember886" className="ember-view"/>
                      <div className="currency-switcher__code">ARS</div>
                      <span className="currency-switcher__label">Pesos argentins</span>
                      <small>($)</small>
                    </label>
                    <label title="Reais brésiliens (R$)" className="currency-switcher__radio ">
                      <input type="radio" value="BRL" id="ember889" className="ember-view"/>
                      <div className="currency-switcher__code">BRL</div>
                      <span className="currency-switcher__label">Reais brésiliens</span>
                      <small>(R$)</small>
                    </label>
                    <label title="Dollars canadiens ($)" className="currency-switcher__radio ">
                      <input type="radio" value="CAD" id="ember892" className="ember-view"/>
                      <div className="currency-switcher__code">CAD</div>
                      <span className="currency-switcher__label">Dollars canadiens</span>
                      <small>($)</small>
                    </label>
                    <label title="Dollars américains ($)" className="currency-switcher__radio ">
                      <input type="radio" value="USD" id="ember895" className="ember-view"/>
                      <div className="currency-switcher__code">USD</div>
                      <span className="currency-switcher__label">Dollars américains</span>
                      <small>($)</small>
                    </label>
                  </div>
                </div>
                <button className="currency-switcher-overlay__close">Cancel</button>
              </div>
              <div id="ember898" className="country-picker-overlay country-picker-overlay--hidden ember-view">
                <h2 className="country-picker-overlay__title">Sélectionnez votre pays</h2>
                <div id="ember903" className="country-picker ember-view">
                  <div className="country-picker__region country-picker__regions--multiples">
                    <h2 className="country-picker__header">Europe</h2>
                    <div className="country-picker__countries">
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="cs" id="ember907" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/cz-962ba594e62faa5aa4bd42a344b8e456.svg" alt="Česko" className="country-picker__flag"/>Česko
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="da" id="ember910" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/dk-0913004cefca1a9d295107811070a36c.svg" alt="Danmark" className="country-picker__flag"/>Danmark
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="de" id="ember913" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/de-ade3348dc05a6b2c09ffa1d7d056a5b3.svg" alt="Deutschland" className="country-picker__flag"/>Deutschland
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="es" id="ember916" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/es-27e60b188d650c3bbfb6bf3a25d450f6.svg" alt="España" className="country-picker__flag"/>España
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button checked ">
                          <input type="radio" value="fr" id="ember919" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/fr-3f3d5b0b269d11f3a65fe5109e0ac701.svg" alt="France" className="country-picker__flag"/>France
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="it" id="ember922" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/it-2dab503c61983f70ccaedfecb8a92f4c.svg" alt="Italia" className="country-picker__flag"/>Italia
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="nl" id="ember925" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/nl-b05a14f78f81912c5d1ab3c17ef49022.svg" alt="Nederland" className="country-picker__flag"/>Nederland
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="nb" id="ember928" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/no-84611259a3d06e1625fb8d18ee4b5c29.svg" alt="Norge" className="country-picker__flag"/>Norge
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="de-at" id="ember931" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/at-7ef67e396c1db77028f1e54762c14ef5.svg" alt="Österreich" className="country-picker__flag"/>Österreich
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="pl" id="ember934" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/pl-74633d6bdd622c18388c54f038fd78f6.svg" alt="Polska" className="country-picker__flag"/>Polska
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="pt-pt" id="ember937" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/pt-e80c8fa23f13c76d3436322932aceb30.svg" alt="Portugal" className="country-picker__flag"/>Portugal
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <div aria-owns="ember-basic-dropdown-content-ember943" tabIndex="0" data-ebd-id="ember943-trigger" role="button" id="ember948" className="country-picker__multiple-locales-country  ember-basic-dropdown-trigger ember-view">                <img src="https://assets.trainline.eu/assets/images/country-flags/ch-cf4622bd712fb7249bd9b1e393566d14.svg" alt="Schweiz" className="country-picker__flag"/>Schweiz
                          <span className="country-picker__multiple-locales-caret down"></span>
                        </div>
                        <div id="ember-basic-dropdown-content-ember943" style={{'display': 'none'}} className="ember-basic-dropdown-content-placeholder">
                        </div>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="sv" id="ember956" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/se-18474eacda642cf9c1d9f8ca71ba4185.svg" alt="Sverige" className="country-picker__flag"/>Sverige
                        </label>
                      </div>
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="en" id="ember959" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/gb-a5425dc0fb6c2c8fd919d07e4ea727f5.svg" alt="United Kingdom" className="country-picker__flag"/>United Kingdom
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="country-picker__region ">
                    <h2 className="country-picker__header">Asie&nbsp;–&nbsp;Pacifique</h2>
                    <div className="country-picker__countries">
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="zh" id="ember963" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/cn-6a893b41b0fc22e152a42f1a38ea6c48.svg" alt="中国" className="country-picker__flag"/>中国
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="country-picker__region ">
                    <h2 className="country-picker__header">Amérique</h2>
                    <div className="country-picker__countries">
                      <div className="country-picker__country">
                        <label className="ember-radio-button  ">
                          <input type="radio" value="pt" id="ember967" className="ember-view"/>
                          <img src="https://assets.trainline.eu/assets/images/country-flags/br-387bbb708c2e3a895772f3931b646f94.svg" alt="Brasil" className="country-picker__flag"/>Brasil
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="country-picker-overlay__close">Cancel</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
