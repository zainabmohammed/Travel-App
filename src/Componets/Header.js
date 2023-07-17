import "../Style/style.css";
import { GiCommercialAirplane } from "react-icons/gi";
const Header = () => {
  return (
    <header>
      <div class="list" id="top">
        <nav class="navbar">
          <ul>
            <div class="travel-logo">
              <li>
            
                <a href="#travel">
                <span><GiCommercialAirplane /></span>  
                Travel
                </a>
              </li>
            </div>

            <div class="list-nav">
              <li>
                <a href="#Home" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#Packages">Packages</a>
              </li>
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#popular">popular</a>
              </li>
              <li>
                <a href="#Review">Reviews</a>
              </li>
            </div>
            <div class="book now">
              <button className="bookbtn">
                <a href="#Book Now">Book Now</a>
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
