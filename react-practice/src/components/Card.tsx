import "../styles/card.css";
import "../styles/general.css";

interface Props {
  movie: {
    url?: string;
    title: string;
    release_date: string;
  };
}

function Card({ movie }: Props) {
  function onFavourite() {}
  return (
    <div className="card-container">
      <div className="card-thumbnail">
        <img src={movie.url} alt={movie.title} />
        <button className="favourite-btn" onClick={onFavourite}>
          ♥
        </button>
      </div>
      <div className="card-text">
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default Card;
