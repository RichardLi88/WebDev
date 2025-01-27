import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../svg/tabletennis.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <p className="nav-title">Richard's Table Tennis Coaching</p>
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="nav-right">
        <div className="div-nav-link">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="div-nav-link">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="div-nav-link">
          <Link to="/book" className="nav-link">
            Book Now
          </Link>
        </div>
        <div className="div-nav-link">
          <Link to="/prices" className="nav-link">
            Prices
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
