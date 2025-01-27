import "../css/Card.css";

function Card() {
  return (
    <>
      <div className="movie-container">
        <div className="movie-pic">
          <img src="abc" alt="Fast and Furious"></img>
        </div>
        <div className="movie-desc">
          <div key="1" className="movie-title">
            Fast and Furious
          </div>
          <div key="2" className="movie-date">
            February 2022
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
