import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../MovieFunctions";
function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log({ err });
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  const handleChange = async () => {
    if (!searchQuery.trim()) {
      return;
    } else if (loading) {
      return;
    }
    try {
      setLoading(true);
      const getMovies = await searchMovies(searchQuery);
      setMovies(getMovies);
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="div-search">
        <input
          type="search"
          className="search-bar"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleChange();
          }}
          onKeyDown={(e) => (e.key === "Enter" ? handleChange() : null)}
        />
        <button className="search-btn" onClick={handleChange}>
          Search
        </button>
      </div>
      {loading ? (
        <div className="div-load">Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
