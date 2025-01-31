import shoppingCartIcon from "../img/shopping-cart-svgrepo-com.svg";
import "../css/NavBar.css";
import plusIcon from "../img/plus-symbol-button-svgrepo-com.svg";
import { useContext } from "react";
import { modalContext } from "../context/modalContext";

function NavBar() {
  const { modal, toggleModal } = useContext(modalContext);
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <p>Product Store</p>
        <img
          className="nav-product-img"
          src={shoppingCartIcon}
          alt="shopping cart"
        ></img>
      </div>
      <div className="nav-right">
        <button className="nav-add-product">
          <img
            className="nav-plus"
            src={plusIcon}
            alt="plus icon"
            onClick={toggleModal}
          ></img>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
