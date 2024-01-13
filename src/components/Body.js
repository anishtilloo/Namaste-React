import RestaurnatCard from "./RestaurantCard";
import SearchSVG from "./SearchSVG";

import { useState } from "react";

const Body = ({resListData}) => {
    // local state variable
    // scope is inside the function which is created
    // listOfRestaurants is a state variable, when change or the value inside gets updated react will re-render the entire component to show the changes
    // setListOfRestaurants is a function given by the useState hook to update the state variable
    // They are generally accessed by array destructuring as useState hook returns an array
    // It takes a default value for the state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([...resListData]);

    const [search, setSearch] = useState("");

    const handleInputSearchValue = (event) => {
        setSearch(event.target.value);
        let searchedListOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
        setListOfRestaurants(searchedListOfRestaurants);
    }

    const hendleClickOnFilter = () => {
        let filteredListOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4)
        setListOfRestaurants(filteredListOfRestaurants)
    }

    return (
        <div className="body">
            <div className="container">
                <div className="search-container">
                    <input className="search" type="text" value={search} />
                    <span className="search-svg">
                        <SearchSVG  />  
                    </span>
                    <button className="search-button" onClick={handleInputSearchValue}>Search</button>
                </div>
                <div>
                    <button className="filter-button" onClick={hendleClickOnFilter}>Filter according to rating</button>
                </div>
            </div>
            
            <div className="reataurant-container">
                {/* Reataurant Card Component */}
                {listOfRestaurants.map(res =>
                    <RestaurnatCard resData={res} key={res.info.id} />
                )}
            </div>
        </div>
    )
}

export default Body;