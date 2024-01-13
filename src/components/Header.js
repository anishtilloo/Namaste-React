import { LOGO_IMAGE_CDN } from "../utils/constants";

export const Header = () => {
    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_IMAGE_CDN} alt="logo" />
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

export default Header;