import { useContext, useEffect, useState } from "react";
import "../css/Modal.css";
import close from "../img/icons8-close.svg";
import { ProductContext } from "../context/productContext";

function Modal({ prefill, modalType, toggleModal }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (prefill) {
      setProduct({
        name: prefill.name,
        price: prefill.price,
        image: prefill.image,
      });
    }
  }, []);

  const { handleAddProduct, handleUpdateProduct } = useContext(ProductContext);

  function handleSubmit(product) {
    if (modalType === "create") handleAddProduct(product);
    else if (modalType === "edit") {
      handleUpdateProduct(product, prefill._id);
    }
    setTimeout(() => {
      toggleModal();
    }, 300);
  }
  return (
    <div className="modal">
      <div className="form-container">
        <div className="modal-title">{`${
          modalType === "create" ? "Create" : "Edit"
        } your Product`}</div>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(product);
          }}
        >
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
            {`${modalType === "create" ? "Add" : "Update"} Product`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
