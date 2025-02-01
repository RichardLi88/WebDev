import { useState } from "react";
import "../css/Modal.css";
import close from "../img/icons8-close.svg";
import { createProduct } from "../function/functions";

function Modal({ toggleModal }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct(product);
    console.log(result);
    toggleModal();
  };
  return (
    <div className="modal">
      <div className="form-container">
        <div className="modal-title">Create your Product</div>
        <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
          <img className="form-close" src={close} onClick={toggleModal}></img>
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
              type="number"
              min="0"
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
          <button className="modal-submit" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
