import Card from "../components/Card";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { title: "John Wick", url: "hello", release_date: "2020" },
    { title: "Wick", url: "hello", release_date: "2020" },
    { title: "John ", url: "hello", release_date: "2020" },
    { title: "John Wick", url: "hello", release_date: "2020" },
  ];

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        <div className="movies-grid">
          {movies.map(
            (movie, index) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <Card movie={movie} key={index} />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
