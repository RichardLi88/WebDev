import "../css/Card.css";

function Card({ movie }) {
  return (
    <>
      <div className="movie-container">
        <div className="movie-pic">
          <img
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="movie-img"
          ></img>
        </div>
        <div className="movie-desc">
          <div key={movie.title} className="movie-title">
            {movie.title}
          </div>
          <div key={movie.release_date} className="movie-date">
            {movie.release_date.split("-")[0]}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
