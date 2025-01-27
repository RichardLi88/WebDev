import "../css/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="nav-title" to="/">
          Movie Finder
        </Link>
      </div>
      <div className="nav-mid">
        <input
          type="search"
          className="search-bar"
          placeholder="Search for a movie"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="nav-right">
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link className="nav-fav" to="/favourites">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
