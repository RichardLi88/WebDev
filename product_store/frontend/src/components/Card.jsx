import "../css/Card.css";

function Card({ data }) {
  return (
    <div className="card">
      <div className="div-img">
        <img className="card-img" src={data.image} />
      </div>
      <div className="card-text">
        <div className="card-name">{data.name}</div>
        <div className="card-price">{`$${data.price}`}</div>
      </div>
    </div>
  );
}

export default Card;
