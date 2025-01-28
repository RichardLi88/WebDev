import Card from "../components/Card";
import "../css/Home.css";

function Home() {
  const movies = [
    {
      title: "John Wick",
      release_date: "2022",
      poster_path: "abc",
      id: "1",
    },
  ];
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
