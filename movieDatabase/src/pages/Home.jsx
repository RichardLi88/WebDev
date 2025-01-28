import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../MovieFunctions";
function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        console.log("start");
        const popularMovies = await getPopularMovies();
        console.log("here");
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <Card key={movie.id} movie={movie} />
        ))}
        ;
      </div>
    </>
  );
}

export default Home;
