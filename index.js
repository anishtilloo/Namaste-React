import React from "react";
import ReactDOM from "react-dom";

const SearchSVG = () => {
    return (
        <div>
            <svg class="feather feather-search" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-B8FTK_bzGRM2gtvB0hTXz5noecys2R_M5EJ2gJ2ul0cAHJ8y8kHB6-dUWQ99Ga3a4G4&usqp=CAU" alt="logo" />
            </div>
            {/* NavItems */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
} 

const RestaurnatCard = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3>Food Title</h3>
                <span>Pricing</span>
                <span>Delivery Time</span>
            </div>
        </div>
    )
} 

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input className="search" type="text" />
                <span className="search-svg">
                    <SearchSVG  />
                </span>
                <button className="search-button">Search</button>
            </div>
            <div className="reataurant-container">
                {/* Reataurant Card Component */}
                <RestaurnatCard />
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
            {/* Footer */}

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);