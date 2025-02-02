import { useState, useEffect, useContext } from "react";
import "../css/Card.css";
import trash from "../img/icons8-trash.svg";
import { ProductContext } from "../context/productContext";

function Card({ data }) {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(data._id);
  }, []);

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
        <button
          className="btn-trash"
          onClick={() => {
            handleDeleteProduct(id);
          }}
        >
          <img className="img-trash" src={trash} />
        </button>
      </div>
    </div>
  );
}

export default Card;
