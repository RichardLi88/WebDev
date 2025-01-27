import "./styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
