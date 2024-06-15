import RestaurnatCard from "./RestaurantCard";
import SearchSVG from "./SearchSVG";

import { useState, useEffect } from "react";

const Body = ({resListData}) => {
    // local state variable
    // scope is inside the function which is created
    // listOfRestaurants is a state variable, when change or the value inside gets updated react will re-render the entire component to show the changes
    // setListOfRestaurants is a function given by the useState hook to update the state variable
    // They are generally accessed by array destructuring as useState hook returns an array
    // It takes a default value for the state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([...resListData]);
    const [filteredListofRestaurants, setFilteredListofRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    const handleInputSearchValue = (event) => {
        setSearch(event.target.value);
        let searchedListOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
        setFilteredListofRestaurants(searchedListOfRestaurants);
    }

    const hendleClickOnFilter = () => {
        let filteredListOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4)
        setFilteredListofRestaurants(filteredListOfRestaurants)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (params) => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        // syntax with ? is called as optional chaining where it check the variable in front of the ? is null or not if it is null then it makes it undefined instead of throwing an error
        // It is an industry standard to use optional chaining
        setListOfRestaurants([...jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
        setFilteredListofRestaurants([...jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants])
    }

    return (
        <div className="body">
            <div className="container">
                <div className="search-container">
                    <input className="search" type="text" value={search} onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
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
                {!filteredListofRestaurants ? <h1>Nothing to display.</h1> : filteredListofRestaurants.map(res =>
                    <RestaurnatCard resData={res} key={res.info.id} />
                )}
            </div>
        </div>
    )
}

export default Body;