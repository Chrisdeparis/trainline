import React, { Component } from 'react';
import './App.css';
import Main from '../Main'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="ct__application application--responsive ct__index   fr background-fr">
    <div class="application__dialogs" data-ember-action="" data-ember-action-451="451">
      <div class="dialog__container">
        <div class="dialog__content">
          
        </div>
      </div>
    </div>

    <div id="ember456" class="ember-view"><div style={{height: '0px'}} id="ember461" class="notification collapsible collapsed ember-view"></div></div>

      

<div data-help-contexts="tab_home" class="application open-home transition-none">
  <div class="open-home__overlay"></div>
  <div class="open-home__cover"></div>

  <div class="application__header-container">
    <div class="application__header">
      <div data-help-filters="filter_personal filter_visitor" data-help-contexts="sticky" id="ember534" class="visitor-header ember-view"><div id="ember543" class="active ember-view">  <div id="ember550" class="header__logo header__logo--large ember-view"></div>
</div>

<ul class="header__account">
    <li class="header__account-item header__signup">
<a href="/signup" id="ember551" class="header__signup-button ember-view">        Créer un compte
</a>    </li>

    <li class="header__account-item header__signin">
      <button class="header__signin-button" data-ember-action="" data-ember-action-583="583">
        Se connecter
      </button>
    </li>


  <li class="header__account-item header__help">
    <div id="ember586" class="help__menu ember-view"><a href="https://aide.trainline.fr" target="_blank" rel="noopener" class="header__link " data-ember-action="" data-ember-action-587="587">
  Aide
</a>
</div>
  </li>

  <li class="header__account-item header__language">
    <button id="ember594" class="header__country-button ember-view"><img src="https://assets.trainline.eu/assets/images/country-flags/fr-3f3d5b0b269d11f3a65fe5109e0ac701.svg" alt="France"/>
</button>
  </li>

    <li class="header__account-item header__currency">
      <button class="header__currency-button">EUR</button>
    </li>
</ul>
</div>
    </div>
  </div>

  <div class="application__body-container">
    <div class="application__body">
      <div id="ember597" class="open-home__header ember-view"><h1 class="open-home__title">Réservez vos billets de train et de bus. <br/>En France et en Europe.</h1>
  <h2 class="open-home__subtitle">Voyagez avec Trainline, leader indépendant de la vente de billets de train et de bus en Europe.</h2>
</div>

<div style={{height: '554px'}} id="ember598" class="search__form--collapsible collapsible slow fade ember-view">  <div style={{'overflow': 'hidden'}} class="collapsible__measuring-div">
            <div data-help-contexts="tab_search" id="ember603" class="search__form ember-view"><div class="search__form--left split-panel--left
        ">
  <div class="search__title">
    Quel est votre trajet&nbsp;?
  </div>

  <form>
    <div class="search__section search__section--od">
      <div class="search__field
               search__departure
               grouped-input--top
               required
               awaiting-input
               focus">
        <input tabindex="1" type="text" autocomplete="off" spellcheck="false" required="" placeholder="Saisissez votre gare de départ…" id="ember669" class="search__departure-input ember-text-field textfield station-text-field empty station-text-field-- search__input focus empty ember-view"/>
      </div>


      <div class="search__field
               search__arrival
               grouped-input--bottom
               required
               awaiting-input
               ">
        <input tabindex="1" type="text" autocomplete="off" spellcheck="false" required="" placeholder="Saisissez votre gare d’arrivée…" id="ember674" class="search__arrival-input ember-text-field textfield station-text-field empty station-text-field-- search__input empty ember-view"/>
      </div>

      <button id="ember677" style={{display: 'none'}} class="search__swap swap-button swap-button--in-between ember-view"><div class="swap-button__equilibrium">
  <span class="swap-button__label">Échanger les gares de départ et d’arrivée</span>
</div>
</button>
    </div>

    <div class="search__section search__section--date">
      <div class="search__field
                  search__departure-date
                  grouped-input--top
                  
                  ">
        <input tabindex="1" type="button" value="" id="ember683" class="search__departure-date-input search__input empty ember-view"/><div class="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'z-index': 2, 'user-select': 'none', 'line-height': '20px', 'left': '36px', 'margin-top': '-30px'}}>Aller</div>

        <div id="ember686" class="search__accessory empty ember-view"><span class="search__accessory-prefix">
  à partir de
</span>

</div>
      </div>

        <div class="search__field
                    search__return-date
                    grouped-input--bottom
                    ">
          <input tabindex="1" type="button" value="" id="ember687" class="search__return-date-input search__input empty ember-view"/><div class="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'z-index': 2, 'user-select': 'none', 'line-height': '20px', 'left': '36px', 'margin-top': '-30px'}}>Retour</div>

          <div id="ember688" class="search__accessory empty ember-view"><span class="search__accessory-prefix">
  à partir de
</span>

</div>
        </div>
    </div>

    <div class="search__section search__section--participants">
      <div class="search__field
               search__participants
               required
               
               search__participants--constrain
               
               grouped-input--single
               ">
        <input tabindex="1" type="button" value="1 Adulte (26 - 59)" id="ember693" class="search__participants-input passengers-field passengers-field__passengers--1 search__input ember-view"/><div class="ct-placeholder" style={{'color': 'rgb(169, 169, 169)', 'position': 'absolute', 'z-index': 2, 'user-select': 'none', 'line-height': '20px', 'left': '36px', 'margin-top': '-30px', 'display': 'none'}}>Passagers</div>

          <button type="button" class="search__add-participants" data-ember-action="" data-ember-action-694="694">
            Sélectionner d’autres passagers
          </button>
      </div>

    </div>



      <a class="search__add-cui" data-ember-action="" data-ember-action-695="695">Utiliser un code de réduction</a>

<div id="ember698" class="search__button progress-button ember-view"><button type="button" tabindex="1" class="button progress-button__button">
        Rechercher

</button>

<div class="progress-button__bar">
  <div style={{'width':'0%'}}></div>
</div>
</div>  </form>
</div>

<div class="split-panel--right-container">
    <div class="search__form--right split-panel--right departure ">
      <div style={{'top': '73px'}} class="split-panel__arrow"></div>

      <div class="ct-panel">
          <div id="ember1051" class="ember-view">  <h1 class="search__title">Choisissez une gare de départ</h1>
    <ul data-help-contexts="zone_origin_destination_selection" class="search__list
               search__stations--list
               " data-ember-action="" data-ember-action-1110="1110">

        <li id="ember1118" class="search__list-item search__stations--list-item station-item highlighted ember-view"><a class="search__list-link search__stations--list-link">
  Paris
</a>
</li>
        <li id="ember1119" class="search__list-item search__stations--list-item station-item ember-view"><a class="search__list-link search__stations--list-link">
  London (Londres)
</a>
</li>
        <li id="ember1120" class="search__list-item search__stations--list-item station-item ember-view"><a class="search__list-link search__stations--list-link">
  Lyon
</a>
</li>
        <li id="ember1121" class="search__list-item search__stations--list-item station-item ember-view"><a class="search__list-link search__stations--list-link">
  Lille
</a>
</li>
        <li id="ember1122" class="search__list-item search__stations--list-item station-item ember-view"><a class="search__list-link search__stations--list-link">
  Bordeaux
</a>
</li>
        <li id="ember1123" class="search__list-item search__stations--list-item station-item ember-view"><a class="search__list-link search__stations--list-link">
  Strasbourg
</a>
</li>
        <li id="ember1124" class="search__list-item search__stations--list-item station-item ember-view"><a class="search__list-link search__stations--list-link">
  Marseille St-Charles
</a>
</li>
    </ul>



    <button class="button--light search__list-button search__list-button--via search__via-icon">
      Via
    </button>
</div>


      </div>
    </div>
</div>
</div>

  </div>
</div>    </div>
  </div>

  <div id="ember717" class="ember-view">  <div id="ember726" class="mobile-incentive generic ember-view"><div class="mobile-incentive__wrapper">
  <div class="mobile-incentive__content">
      <h1 class="mobile-incentive__title">Réservez vos billets de train et de bus. <br/>En France et en Europe.</h1>
      <span class="mobile-incentive__subtitle">Trainline marche encore mieux quand vous utilisez notre application.</span>

      <div class="mobile-incentive__badges">
        <div class="mobile-incentive__apps">
          <a href="https://333834.measurementapi.com/serve?action=click&amp;publisher_id=333834&amp;site_id=119871" target="_blank" rel="noopener" data-ember-action="" data-ember-action-727="727">
            <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Télécharger l’application Android"/>
          </a>
          <a href="https://333834.measurementapi.com/serve?action=click&amp;publisher_id=333834&amp;site_id=119875" target="_blank" rel="noopener" data-ember-action="" data-ember-action-728="728">
            <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger l’application iPhone et iPad"/>
          </a>
        </div>
        <button type="button" class="mobile-incentive__mweb" data-ember-action="" data-ember-action-729="729">Ou continuer sur notre site mobile.</button>
      </div>

    <div class="mobile-incentive__arrow"></div>
  </div>
</div>
</div>

<section class="open-home__main">
  <article class="open-home__carriers">
    <div id="ember732" class="ember-view"><div class="open-home-carriers__title--container open-home__content">
  <h3 class="open-home-carriers__title">Ils nous font confiance. Nous vendons leurs billets.</h3>
</div>

<div class="open-home-carriers__logos">
  <div class="open-home__content">
    <div class="open-home-carriers--primary">
        <div class="open-home-carriers__logo">
          <div title="SNCF" class="train-logo train-logo--sncf"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="OUIGO" class="train-logo train-logo--ouigo"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="OUIBUS" class="train-logo train-logo--ouibus"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Thalys" class="train-logo train-logo--thalys"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Eurostar" class="train-logo train-logo--eurostar"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Lyria" class="train-logo train-logo--lyria"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Deutsche&nbsp;Bahn" class="train-logo train-logo--db"></div>

        </div>
    </div>
    <div class="open-home-carriers--secondary">
        <div class="open-home-carriers__logo">
          <div title="Trenitalia" class="train-logo train-logo--trenitalia"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Thello" class="train-logo train-logo--thello"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Italo" class="train-logo train-logo--italo"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="Renfe" class="train-logo train-logo--renfe"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="SNCB" class="train-logo train-logo--sncb"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="NS" class="train-logo train-logo--ns"></div>

        </div>
        <div class="open-home-carriers__logo">
          <div title="" class="train-logo train-logo--cff"></div>

        </div>
    </div>
  </div>
</div>
</div>
  </article>

    <article class="open-home__intro">
      <div class="open-home__content">
        <h2>Tous les billets. Un seul guichet.</h2>
        <p>Nous vendons tous les billets que vous avez l’habitude d’acheter en France <br/>et tous ceux dont vous pourriez avoir besoin à l’étranger.</p>
      </div>
    </article>

    <article class="open-home__arguments">
      <div class="open-home__argument">
        <div class="open-home-argument__illu open-home-argument__illu--first"></div>
        <div class="open-home-argument__text">
          <div class="text">
            <h2>C’est simple et c’est tout.</h2>
            <p>Consultez les horaires des trains et le prix des billets dans une interface claire. Nous comparons les prix de plusieurs transporteurs, pour que vous n’ayez pas à le faire.</p>
          </div>
        </div>
      </div>
      <div class="open-home__argument">
        <div class="open-home-argument__illu open-home-argument__illu--second"></div>
        <div class="open-home-argument__text">
          <div class="text">
            <h2>La très grande vitesse. Dès l’achat du billet.</h2>
            <p>Trouvez et payez vos billets sur notre site en moins de temps qu’il n’en faut pour perdre patience sur un site ordinaire. Soit à peu près 58 secondes.</p>
          </div>
        </div>
      </div>
      <div class="open-home__argument">
        <div class="open-home-argument__illu open-home-argument__illu--third"></div>
        <div class="open-home-argument__text">
          <div class="text">
            <h2>Sans pub et sans reproche.</h2>
            <p>En choisissant de ne vendre que des billets, nous avons dû laisser certaines choses de côté, comme les publicités, les messages et les erreurs incompréhensibles.</p>
          </div>
        </div>
      </div>
    </article>

  <article class="open-home__features">
    <div class="open-home__content">
      <h2>Comment ça marche&nbsp;?</h2>

      <div class="open-home__features--half">
        <h3>Paiement</h3>

        <div class="open-home__features--table">
            <img src="https://assets.trainline.eu/assets/images/open-home/icons/cards-cc4ccb22567fa0fec204e7aaae7a3f8b.svg" width="139" height="95" class="icon-cards"/>
          <div class="or">Ou</div>
          <img src="https://assets.trainline.eu/assets/images/open-home/icons/paypal-d4915d56d6160a55c7888417ae53a658.svg" width="110" height="34" class="icon-paypal"/>
        </div>

        <p>Nous soignons et sécurisons vos achats <br/>comme s’ils n’avaient pas de prix.</p>
      </div>

      <div class="open-home__features--half">
        <h3>Billets</h3>

        <div class="open-home__features--table">
            <img src="https://assets.trainline.eu/assets/images/open-home/icons/tickets-5842361da60d84a811b13651729c7b2b.svg" width="120" height="85" class="icon-tickets"/>
            <div class="or">Ou</div>
            <img src="https://assets.trainline.eu/assets/images/open-home/icons/eticket-89bda370d79334ab48d0b16eebe40764.svg" width="90" height="95" class="icon-eticket"/>
        </div>

        <p>Vous obtenez un billet cartonné à retirer en gare <br/>ou un e-billet à imprimer chez vous.</p>
      </div>
    </div>
  </article>

  <article class="open-home__bus-teaser">
    <h2>Allez-y (aussi) en bus</h2>
    <p class="open-home__bus-teaser__description">Nous vendons également des billets de bus pour que vous ayez le choix, sans l’embarras.</p>
    <img src="https://assets.trainline.eu/assets/images/open-home/icons/bus_teaser-b029eca7372f7fcae1eaf703f3f598b7.svg" alt="Bus ticket sale teaser"/>
  </article>

    <article class="open-home__testimonials">
      <div class="open-home__content">
        <h2>Demandez conseil à nos utilisateurs.</h2>
        <p>Tout le marketing du monde ne remplacera jamais ce que nos utilisateurs disent de nous. <br/>C’est encore eux qui parlent le mieux de notre service.</p>
      </div>

      <div id="ember769" class="ember-view"><div class="open-home__tweets--container open-home__content">
  <ul class="open-home__tweets">
      <li class="open-home__tweet">
        <div id="ember1042" class="ember-view"><twitterwidget class="twitter-tweet twitter-tweet-rendered" id="twitter-widget-0" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'max-width': '100%', 'width': '320px', 'min-width': '220px', 'margin-top': '10px', 'margin-bottom': '10px'}} data-tweet-id="970718910927564801"></twitterwidget>
</div>
      </li>
      <li class="open-home__tweet">
        <div id="ember1044" class="ember-view"><twitterwidget class="twitter-tweet twitter-tweet-rendered" id="twitter-widget-1" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'max-width': '100%', 'width': '320px', 'min-width': '220px', 'margin-top': '10px', 'margin-bottom': '10px'}} data-tweet-id="970714467490254848"></twitterwidget>
</div>
      </li>
      <li class="open-home__tweet">
        <div id="ember1046" class="ember-view"><twitterwidget class="twitter-tweet twitter-tweet-rendered" id="twitter-widget-2" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'max-width': '100%', 'width': '320px', 'min-width': '220px', 'margin-top': '10px', 'margin-bottom': '10px'}} data-tweet-id="968515258179641345"></twitterwidget>
</div>
      </li>
  </ul>
<div style={{'height': '0px'}} id="ember774" class="collapsible collapsed slow ember-view"></div>  <a href="#" class="tweets__load-more " data-ember-action="" data-ember-action-775="775">
    Plus d’amour…
  </a>
</div>
</div>

      <div id="ember778" class="ember-view">  <div class="open-home__press">
    <div class="open-home__content">
      <a href="https://www.trainline.fr/press" class="open-home-press__link">
          <img src="https://assets.trainline.eu/assets/images/open-home/press/france2-426c29639e964b6b8131b2234de3fa0e.png" alt="france2" class="open-home-press__logo open-home-press__logo--france2"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/20min-dee5c2ef164835bc76e9bf418954ce06.png" alt="20min" class="open-home-press__logo open-home-press__logo--20min"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/canalplus-3b6414c4f6fead5711bf008ec8f09c21.png" alt="canalplus" class="open-home-press__logo open-home-press__logo--canalplus"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/challenges-d3f3161570179835b0735642742763ef.png" alt="challenges" class="open-home-press__logo open-home-press__logo--challenges"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/figaro-13b783c88bd90131113156f4028dfee5.png" alt="figaro" class="open-home-press__logo open-home-press__logo--figaro"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/lci-0e0a2cba409560b2eb6b9e7563930181.png" alt="lci" class="open-home-press__logo open-home-press__logo--lci"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/lemonde-bb82c17ccd314dffc91373f3d72104fb.png" alt="lemonde" class="open-home-press__logo open-home-press__logo--lemonde"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/ouifm-62b6adbb090d1496b440ba9ce15873f3.png" alt="ouifm" class="open-home-press__logo open-home-press__logo--ouifm"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/parisien-5ff202730d637a2c595eeb976c133c40.png" alt="parisien" class="open-home-press__logo open-home-press__logo--parisien"/>
          <img src="https://assets.trainline.eu/assets/images/open-home/press/techcrunch-55076242894a2d1ff551f1f6765f5ef7.png" alt="techcrunch" class="open-home-press__logo open-home-press__logo--techcrunch"/>
      </a>
    </div>
  </div>
</div>

    </article>

    <article class="open-home__get-on-board">
      <div class="open-home__content">
        <h2>Montez à bord&nbsp;!</h2>
        <p>Arrêtez de vous prendre la tête. Prenez le train.</p>
        <button type="button" class="button" data-ember-action="" data-ember-action-789="789">Réservez un billet</button>
      </div>
    </article>

</section>
</div>

  <div id="ember792" class="ember-view">  <div id="ember797" class="ember-view"><footer class="tle tle-footer">
  <div class="tle-footer-upper">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 visible-xs tle-footer-app">
          <div class="tle-footer-app-cta">
            <div class="tle-footer-icons">
              <a href="https://itunes.apple.com/fr/app/id599502670">
                <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger dans l’App Store"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.capitainetrain.android&amp;hl=fr">
                <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Disponible sur Google Play"/>
              </a>
            </div>
            <div class="tle-footer-textbox">
              <p>Chaque mois, plus de 16,5 millions de personnes visitent les sites ou applications Trainline. <a href="https://www.trainline.fr/information/trainline-eu-app">Téléchargez l’app</a>.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 tle-footer-company-info">
          <div class="row">
            <div class="col-md-12 col-xs-6">
              <div class="tle-footer-spacer">
                <img src="https://assets.trainline.eu/assets/images/trainline-logo-cf635433ef235d4f4eb00da841ad174c.svg" alt="Trainline" class="tle-footer-logo"/>
              </div>
              <ul>
                <li><a href="https://www.trainline.fr/contact">Contacter Trainline</a></li>
                <li><a href="https://aide.trainline.fr/">Site d’aide</a></li>
                <li><a href="https://www.trainline.fr/about/us">Qui sommes-nous&nbsp;?</a></li>
                <li>
                  <a href="https://www.trainline.fr/press">Informations presse</a>
                  <span class="tle-footer-ampersand">&amp;</span>
                  <a href="https://blog.trainline.fr/">Blog</a>
                </li>
              </ul>
            </div>
            <div class="col-md-12 col-xs-6">
              <ul>
                <li><a href="https://www.trainline.fr/business">Pour les entreprises</a></li>
                <li><a href="https://www.trainline.fr/jobs">Offres d’emploi</a></li>
                <li>
                  <a href="https://www.trainline.fr/terms">CGV</a>
                  <span class="tle-footer-ampersand">&amp;</span>
                  <a href="https://www.trainline.fr/legal-information">Informations légales</a>
                </li>
                <li>
                  <a href="https://www.trainline.fr/privacy-policy">Données personnelles</a>
                  <span class="tle-footer-ampersand">&amp;</span>
                  <a href="https://www.trainline.fr/cookies">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 hidden-xs tle-footer-app">
          <div class="tle-footer-app-cta">
            <div class="tle-footer-spacer"></div>
            <div class="tle-footer-icons visible-sm">
              <a href="https://itunes.apple.com/fr/app/id599502670">
                <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger dans l’App Store"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.capitainetrain.android&amp;hl=fr">
                <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Disponible sur Google Play"/>
              </a>
            </div>
            <div class="tle-footer-textbox">
              <p>Chaque mois, plus de 16,5 millions de personnes visitent les sites ou applications Trainline. <a href="https://www.trainline.fr/information/trainline-eu-app">Téléchargez l’app</a>.</p>
            </div>
            <div class="tle-footer-icons hidden-sm">
              <a href="https://itunes.apple.com/fr/app/id599502670">
                <img src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg" alt="Télécharger dans l’App Store"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.capitainetrain.android&amp;hl=fr">
                <img src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg" alt="Disponible sur Google Play"/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12">
          <div class="row">
            <div class="visible-xs-block visible-sm-block col-xs-12">
              <div id="tle-footer-accordion" class="tle-footer-accordion-folder">
                <img src="https://assets.trainline.eu/assets/images/carat-26847c2616f102a474af23f1cb282d20.svg" alt="Plus d’informations" class="tle-footer-accordion-carat "/>
                <div class="tle-footer-accordion-header ">
                  <span>Destinations ∙ Horaires de train</span>
                  <span class="tle-footer-accordion-disappearing-dot"> ∙ </span>
                  <span class="visible-xs-block visible-sm-inline">Stations ∙ Voyager en train</span>
                </div>
              </div>
            </div>
            <div class="tle-footer-train-links tle-footer-toggled">
              <nav itemscope="" itemtype="http://schema.org/SiteNavigationElement" class="col-sm-3 col-xs-6">
                <ul>
                  <li itemprop="name"><h4><a href="https://www.trainline.fr/destinations" itemprop="url">Destinations</a></h4></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-paris" itemprop="url">Trains pour Paris</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-lyon" itemprop="url">Trains pour Lyon</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-nice" itemprop="url">Trains pour Nice</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-marseille" itemprop="url">Trains pour Marseille</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-bordeaux" itemprop="url">Trains pour Bordeaux</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-toulouse" itemprop="url">Trains pour Toulouse</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/destinations/trains-pour-montpellier" itemprop="url">Trains pour Montpellier</a></li>
                </ul>
              </nav>
              <nav itemscope="" itemtype="http://schema.org/SiteNavigationElement" class="col-sm-3 col-xs-6">
                <ul>
                  <li itemprop="name"><h4><a href="https://www.trainline.fr/horaires-train" itemprop="url">Horaires</a></h4></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/paris-a-marseille" itemprop="url">Paris – Marseille</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/marseille-a-paris" itemprop="url">Marseille – Paris</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/paris-a-lyon" itemprop="url">Paris – Lyon</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/paris-a-bordeaux" itemprop="url">Paris – Bordeaux</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/paris-a-toulouse" itemprop="url">Paris – Toulouse</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/paris-a-lille" itemprop="url">Paris – Lille</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/horaires-train/paris-a-london" itemprop="url">Paris – Londres</a></li>
                </ul>
              </nav>
              <nav itemscope="" itemtype="http://schema.org/SiteNavigationElement" class="col-sm-3 col-xs-6">
                <ul>
                  <li itemprop="name"><h4><a href="https://www.trainline.fr/gares" itemprop="url">Gares</a></h4></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/paris-gare-du-nord" itemprop="url">Paris Gare du Nord</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/paris-gare-de-lyon" itemprop="url">Paris Gare de Lyon</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/paris-gare-montparnasse" itemprop="url">Paris Gare Montparnasse</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/paris-gare-de-lest" itemprop="url">Paris Gare de l’Est</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/lyon-part-dieu" itemprop="url">Lyon Part-Dieu</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/paris-gare-st-lazare" itemprop="url">Paris Gare St-Lazare</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/gares/marseille-st-charles" itemprop="url">Marseille St-Charles</a></li>
                </ul>
              </nav>
              <nav itemscope="" itemtype="http://schema.org/SiteNavigationElement" class="col-sm-3 col-xs-6">
                <ul>
                  <li itemprop="name"><h4><a href="https://www.trainline.fr/information" itemprop="url">Voyager en train</a></h4></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/information/cartes-abonnements-de-train" itemprop="url">Cartes &amp; abonnements SNCF</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/information/les-trains-en-france" itemprop="url">Trains en France</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/information/trains-en-espagne" itemprop="url">Trains en Espagne</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/information/trains-en-italie" itemprop="url">Trains en Italie</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/information/trains-en-allemagne" itemprop="url">Trains en Allemagne</a></li>
                    <li itemprop="name"><a href="https://www.trainline.fr/information/interrail" itemprop="url">Pass Interrail</a></li>
                    <li itemprop="name"><a href="https://www.trainline.eu/information/eurostar" itemprop="url">Eurostar</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tle-footer-lower">
    <div class="container">
      <div class="row">
        <div class="col-xs-3 col-sm-4 tle-footer-social hidden-xs">
          <h5>Suivez-nous</h5>
          <a href="https://www.facebook.com/trainline.fr"><img src="https://assets.trainline.eu/assets/images/footer/seo/facebook-845e0f46ff9016203d5e6786a33396f2.svg" alt="Facebook"/></a>
          <a href="https://twitter.com/trainline_fr"><img src="https://assets.trainline.eu/assets/images/footer/seo/twitter-e23662441d4b97c1639c49bb44f7388a.svg" alt="Twitter"/></a>
        </div>
        <div class="col-sm-6 hidden-xs"></div>
        <div class="col-xs-12 col-sm-8 tle-footer-pay-logos">
            <img src="https://assets.trainline.eu/assets/images/footer/seo/apple-pay-logo-9ae0cfc509e5cdfb136913a153b7043e.svg" alt="Apple Pay"/>
          <img src="https://assets.trainline.eu/assets/images/footer/seo/paypal-logo-cc1f95a91a1f56b951a3b6d89c8a9e86.svg" alt="PayPal"/>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
</div>

  <div style={{'top': '60px'}} id="ember828" class="help__panel help__panel--hidden ember-view"></div>

  <div style={{'':''}} id="ember831" class="currency-switcher-overlay currency-switcher-overlay--hidden ember-view"><div id="ember836" class="currency-switcher ember-view">
  <div class="currency-switcher__region">
    <h2 class="currency-switcher__header">Europe</h2>

      <label title="Couronnes tchèques (Kč)" class="currency-switcher__radio ">
          <input type="radio" value="CZK" id="ember848" class="ember-view"/>

        <div class="currency-switcher__code">CZK</div>
        <span class="currency-switcher__label">Couronnes tchèques</span>
         <small>(Kč)</small>
      </label>
      <label title="Couronnes danoises (kr)" class="currency-switcher__radio ">
          <input type="radio" value="DKK" id="ember851" class="ember-view"/>

        <div class="currency-switcher__code">DKK</div>
        <span class="currency-switcher__label">Couronnes danoises</span>
         <small>(kr)</small>
      </label>
      <label title="Euros (€)" class="currency-switcher__radio checked">
          <input type="radio" value="EUR" id="ember854" class="ember-view"/>

        <div class="currency-switcher__code">EUR</div>
        <span class="currency-switcher__label">Euros</span>
         <small>(€)</small>
      </label>
      <label title="Livres sterling (£)" class="currency-switcher__radio ">
          <input type="radio" value="GBP" id="ember857" class="ember-view"/>

        <div class="currency-switcher__code">GBP</div>
        <span class="currency-switcher__label">Livres sterling</span>
         <small>(£)</small>
      </label>
      <label title="Couronnes norvégiennes (kr)" class="currency-switcher__radio ">
          <input type="radio" value="NOK" id="ember860" class="ember-view"/>

        <div class="currency-switcher__code">NOK</div>
        <span class="currency-switcher__label">Couronnes norvégiennes</span>
         <small>(kr)</small>
      </label>
      <label title="Zlotys polonais (zł)" class="currency-switcher__radio ">
          <input type="radio" value="PLN" id="ember863" class="ember-view"/>

        <div class="currency-switcher__code">PLN</div>
        <span class="currency-switcher__label">Zlotys polonais</span>
         <small>(zł)</small>
      </label>
      <label title="Roubles russes (₽)" class="currency-switcher__radio ">
          <input type="radio" value="RUB" id="ember866" class="ember-view"/>

        <div class="currency-switcher__code">RUB</div>
        <span class="currency-switcher__label">Roubles russes</span>
         <small>(₽)</small>
      </label>
      <label title="Couronnes suédoises (kr)" class="currency-switcher__radio ">
          <input type="radio" value="SEK" id="ember869" class="ember-view"/>

        <div class="currency-switcher__code">SEK</div>
        <span class="currency-switcher__label">Couronnes suédoises</span>
         <small>(kr)</small>
      </label>
      <label title="Francs suisses" class="currency-switcher__radio ">
          <input type="radio" value="CHF" id="ember872" class="ember-view"/>

        <div class="currency-switcher__code">CHF</div>
        <span class="currency-switcher__label">Francs suisses</span>
        
      </label>
  </div>
  <div class="currency-switcher__region">
    <h2 class="currency-switcher__header">Asie&nbsp;–&nbsp;Pacifique</h2>

      <label title="Dollars australiens ($)" class="currency-switcher__radio ">
          <input type="radio" value="AUD" id="ember876" class="ember-view"/>

        <div class="currency-switcher__code">AUD</div>
        <span class="currency-switcher__label">Dollars australiens</span>
         <small>($)</small>
      </label>
      <label title="Yens japonais (¥)" class="currency-switcher__radio ">
          <input type="radio" value="JPY" id="ember879" class="ember-view"/>

        <div class="currency-switcher__code">JPY</div>
        <span class="currency-switcher__label">Yens japonais</span>
         <small>(¥)</small>
      </label>
      <label title="Yuans chinois (¥)" class="currency-switcher__radio ">
          <input type="radio" value="CNY" id="ember882" class="ember-view"/>

        <div class="currency-switcher__code">CNY</div>
        <span class="currency-switcher__label">Yuans chinois</span>
         <small>(¥)</small>
      </label>
  </div>
  <div class="currency-switcher__region">
    <h2 class="currency-switcher__header">Amérique</h2>

      <label title="Pesos argentins ($)" class="currency-switcher__radio ">
          <input type="radio" value="ARS" id="ember886" class="ember-view"/>

        <div class="currency-switcher__code">ARS</div>
        <span class="currency-switcher__label">Pesos argentins</span>
         <small>($)</small>
      </label>
      <label title="Reais brésiliens (R$)" class="currency-switcher__radio ">
          <input type="radio" value="BRL" id="ember889" class="ember-view"/>

        <div class="currency-switcher__code">BRL</div>
        <span class="currency-switcher__label">Reais brésiliens</span>
         <small>(R$)</small>
      </label>
      <label title="Dollars canadiens ($)" class="currency-switcher__radio ">
          <input type="radio" value="CAD" id="ember892" class="ember-view"/>

        <div class="currency-switcher__code">CAD</div>
        <span class="currency-switcher__label">Dollars canadiens</span>
         <small>($)</small>
      </label>
      <label title="Dollars américains ($)" class="currency-switcher__radio ">
          <input type="radio" value="USD" id="ember895" class="ember-view"/>

        <div class="currency-switcher__code">USD</div>
        <span class="currency-switcher__label">Dollars américains</span>
         <small>($)</small>
      </label>
  </div>
</div>

<button class="currency-switcher-overlay__close">Cancel</button>

</div>

  <div id="ember898" class="country-picker-overlay country-picker-overlay--hidden ember-view"><h2 class="country-picker-overlay__title">Sélectionnez votre pays</h2>

<div id="ember903" class="country-picker ember-view">  <div class="country-picker__region country-picker__regions--multiples">
    <h2 class="country-picker__header">Europe</h2>
    <div class="country-picker__countries">
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="cs" id="ember907" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/cz-962ba594e62faa5aa4bd42a344b8e456.svg" alt="Česko" class="country-picker__flag"/>Česko

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="da" id="ember910" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/dk-0913004cefca1a9d295107811070a36c.svg" alt="Danmark" class="country-picker__flag"/>Danmark

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="de" id="ember913" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/de-ade3348dc05a6b2c09ffa1d7d056a5b3.svg" alt="Deutschland" class="country-picker__flag"/>Deutschland

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="es" id="ember916" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/es-27e60b188d650c3bbfb6bf3a25d450f6.svg" alt="España" class="country-picker__flag"/>España

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button checked ">
    <input type="radio" value="fr" id="ember919" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/fr-3f3d5b0b269d11f3a65fe5109e0ac701.svg" alt="France" class="country-picker__flag"/>France

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="it" id="ember922" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/it-2dab503c61983f70ccaedfecb8a92f4c.svg" alt="Italia" class="country-picker__flag"/>Italia

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="nl" id="ember925" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/nl-b05a14f78f81912c5d1ab3c17ef49022.svg" alt="Nederland" class="country-picker__flag"/>Nederland

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="nb" id="ember928" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/no-84611259a3d06e1625fb8d18ee4b5c29.svg" alt="Norge" class="country-picker__flag"/>Norge

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="de-at" id="ember931" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/at-7ef67e396c1db77028f1e54762c14ef5.svg" alt="Österreich" class="country-picker__flag"/>Österreich

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="pl" id="ember934" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/pl-74633d6bdd622c18388c54f038fd78f6.svg" alt="Polska" class="country-picker__flag"/>Polska

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="pt-pt" id="ember937" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/pt-e80c8fa23f13c76d3436322932aceb30.svg" alt="Portugal" class="country-picker__flag"/>Portugal

  </label>
        </div>
        <div class="country-picker__country">
<div aria-owns="ember-basic-dropdown-content-ember943" tabindex="0" data-ebd-id="ember943-trigger" role="button" id="ember948" class="country-picker__multiple-locales-country  ember-basic-dropdown-trigger ember-view">                <img src="https://assets.trainline.eu/assets/images/country-flags/ch-cf4622bd712fb7249bd9b1e393566d14.svg" alt="Schweiz" class="country-picker__flag"/>Schweiz
                  <span class="country-picker__multiple-locales-caret down"></span>
</div>  <div id="ember-basic-dropdown-content-ember943" style={{'display': 'none'}} class="ember-basic-dropdown-content-placeholder"></div>

        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="sv" id="ember956" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/se-18474eacda642cf9c1d9f8ca71ba4185.svg" alt="Sverige" class="country-picker__flag"/>Sverige

  </label>
        </div>
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="en" id="ember959" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/gb-a5425dc0fb6c2c8fd919d07e4ea727f5.svg" alt="United Kingdom" class="country-picker__flag"/>United Kingdom

  </label>
        </div>
    </div>
  </div>
  <div class="country-picker__region ">
    <h2 class="country-picker__header">Asie&nbsp;–&nbsp;Pacifique</h2>
    <div class="country-picker__countries">
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="zh" id="ember963" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/cn-6a893b41b0fc22e152a42f1a38ea6c48.svg" alt="中国" class="country-picker__flag"/>中国

  </label>
        </div>
    </div>
  </div>
  <div class="country-picker__region ">
    <h2 class="country-picker__header">Amérique</h2>
    <div class="country-picker__countries">
        <div class="country-picker__country">
  <label class="ember-radio-button  ">
    <input type="radio" value="pt" id="ember967" class="ember-view"/>

                    <img src="https://assets.trainline.eu/assets/images/country-flags/br-387bbb708c2e3a895772f3931b646f94.svg" alt="Brasil" class="country-picker__flag"/>Brasil

  </label>
        </div>
    </div>
  </div>
</div>

<button class="country-picker-overlay__close">Cancel</button>
</div>
</div>



  </div>
        
        
        
      </div>
    );
  }
}

export default App;
