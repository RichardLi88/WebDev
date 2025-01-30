import { Route, Routes } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./css/App.css";
import { FavouriteContext } from "./context/context";
import { useState } from "react";

function App() {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  return (
    <>
      <FavouriteContext.Provider
        value={{ favouriteMovies, setFavouriteMovies }}
      >
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </FavouriteContext.Provider>
    </>
  );
}

export default App;
