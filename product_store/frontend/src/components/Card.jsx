import { useState, useEffect } from "react";
import "../css/Card.css";
import trash from "../img/icons8-trash.svg";
import { deleteProduct } from "../function/functions";

function Card({ data }) {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(data._id);
  }, []);

  async function handleDelete() {
    try {
      const result = await deleteProduct(id);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  }
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
        <button className="btn-trash" onClick={handleDelete}>
          <img className="img-trash" src={trash} />
        </button>
      </div>
    </div>
  );
}

export default Card;
