import React from 'react'
import { Link } from 'react-router-dom'



const PopularListItem = ({ cities }) => (
    <li className="search__list-item search__stations--list-item station-item highlighted ember-view">
        <Link className="search__list-link search__stations--list-link" to={`#`}>
            {cities.unique_name}
        </Link>
        
    </li>
)

const PopularList = (props) => {
    return (
        <div className="list-search">
            <ul className="search__list-item search__list
            search__stations--list
            "> 
                {props.list.map(cities => (
                    <PopularListItem cities={cities} key={cities.city_id} />
                ))}
            </ul>
        </div>
    )
}

export default PopularList