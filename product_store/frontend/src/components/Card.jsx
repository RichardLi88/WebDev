import { useState, useEffect, useContext } from "react";
import "../css/Card.css";
import trash from "../img/icons8-trash.svg";
import { ProductContext } from "../context/productContext";
import edit from "../img/icons8-edit.svg";
import Modal from "../components/Modal";

function Card({ data }) {
  const [id, setId] = useState("");
  const [editProduct, setEditProduct] = useState(false);
  useEffect(() => {
    setId(data._id);
  }, []);

  function toggleEditProduct() {
    setEditProduct(!editProduct);
  }

  const { handleDeleteProduct } = useContext(ProductContext);

  return (
    <div className="card">
      <div className="div-img">
        <img className="card-img" src={data.image} />
      </div>
      <div className="card-bot">
        <div className="card-text">
          <div className="card-name">{data.name}</div>
          <div className="card-price">{`$${data.price}`}</div>
        </div>
        <div className="card-icon">
          <button className="btn-icon" onClick={toggleEditProduct}>
            <img className="img-icon" src={edit} />
          </button>
          <button
            className="btn-icon"
            onClick={() => {
              handleDeleteProduct(id);
            }}
          >
            <img className="img-icon" src={trash} />
          </button>
        </div>
      </div>
      {editProduct && (
        <Modal
          toggleModal={toggleEditProduct}
          modalType={"edit"}
          prefill={data}
        />
      )}
    </div>
  );
}

export default Card;
