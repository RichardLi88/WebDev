import { useState } from "react";
import "../css/Modal.css";
import close from "../img/icons8-close.svg";

function Modal({ toggleModal }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <div className="modal">
      <div className="form-container">
        <img className="form-close" src={close} onClick={toggleModal}></img>
        <div className="modal-title">Create your Product</div>
        <div className="modal-name">
          <input
            placeholder="Product Name"
            className="modal-input"
            type="text"
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </div>
        <div className="modal-price">
          <input
            placeholder="Price"
            className="modal-input"
            type="text"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
        </div>
        <div className="modal-image">
          <input
            placeholder="Image URL"
            className="modal-input"
            type="text"
            value={product.image}
            onChange={(e) => {
              setProduct({ ...product, image: e.target.value });
            }}
          />
        </div>
        <button className="modal-submit" onSubmit={console.log(product)}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Modal;
