import { useContext, useState } from "react";
import { FavouriteContext } from "../context/context";
import Card from "../components/Card";

function Favourites() {
  const { favouriteMovies, setFavouriteMovies } = useContext(FavouriteContext);

  return (
    <>
      <div className="movie-grid">
        {favouriteMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Favourites;
