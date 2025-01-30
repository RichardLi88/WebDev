import "../css/Card.css";
import { useEffect, useContext, useState } from "react";
import { FavouriteContext } from "../context/context";

function Card({ movie }) {
  let [liked, setLiked] = useState(false);
  const { favouriteMovies, setFavouriteMovies } = useContext(FavouriteContext);

  useEffect(() => {
    if (favouriteMovies.some((mv) => mv.id === movie.id)) {
      setLiked(true);
    }
  }, []);

  const onFavourite = (e) => {
    const newLiked = !liked;
    setLiked(!liked);

    if (newLiked) {
      setFavouriteMovies((prev) => [...prev, movie]);
    } else if (!newLiked) {
      setFavouriteMovies((prev) => prev.filter((mv) => mv.id !== movie.id));
    }
  };

  return (
    <>
      <div className="movie-container">
        <div className="movie-pic">
          <img
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="movie-img"
          ></img>
          <div
            className={`movie-fav ${liked ? "liked" : "not-liked"}`}
            onClick={onFavourite}
          >
            ♥
          </div>
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
