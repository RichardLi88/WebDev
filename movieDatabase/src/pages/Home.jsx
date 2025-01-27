import Card from "../components/Card";
import "../css/Home.css";

function Home() {
  return (
    <>
      <div className="movie-grid">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} />
        ))}
        ;
      </div>
    </>
  );
}

export default Home;
