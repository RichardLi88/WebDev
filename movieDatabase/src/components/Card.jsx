import "../css/Card.css";

function Card({ movie }) {
  return (
    <>
      <div className="movie-container">
        <div className="movie-pic">
          <img src={movie.poster_path} alt="Fast and Furious"></img>
        </div>
        <div className="movie-desc">
          <div key={movie.title} className="movie-title">
            {movie.title}
          </div>
          <div key={movie.date} className="movie-date">
            {movie.date}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
