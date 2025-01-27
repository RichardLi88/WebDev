import { Route, Routes } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Nav from "./components/nav";
import "./css/App.css";
function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
