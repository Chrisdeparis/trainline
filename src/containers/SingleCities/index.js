// import React, { Component } from 'react'
// import Loader from '../../components/Loader'

// class SingleCities extends Component {
//     state = {
//         show: null,   
//     }

//     componentDidMount(){

//         const { id } = this.props.match.params

//         fetch(`http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${id}`)
//             .then(response => response.json())
//             .then(json => this.setState({ show: json }))
//     }

//     render() {
        
//         const { show } = this.state
//         // console.log(show);
        
//         return (
//             <div>
//                 { show === null && <Loader />}
//                 {
//                     show !== null
//                     &&
//                     <div>
//                         {/* <p>Show has been loaded - {this.props.match.params.id}</p> */}
//                         <h1>Ville: {show.unique_name}</h1>
//                         <p>Localité - {show.local_name}</p>
//                         <p>Latitude - {show.latitude}</p>
//                         <p>Longitude - {show.longitude}</p>
//                         <p>
                            
//                         </p>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

// export default SingleCities