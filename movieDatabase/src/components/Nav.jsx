import "../css/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="nav-title" onClick={window.location.reload} to="/">
          Movie Finder
        </Link>
      </div>
      <div className="nav-mid"></div>
      <div className="nav-right">
        <Link className={`nav-home`} to="/">
          Home
        </Link>
        <Link className={`nav-fav`} to="/favourites">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
