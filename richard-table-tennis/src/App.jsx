import Home from "./pages/Home"
import About from "./pages/About"
import Book from "./pages/Book"
import Prices from "./pages/Prices"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import "./styles/App.css"

function App() {
  return <>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/book" element={<Book/>} />
    <Route path="/prices" element={<Prices/>} />
  </Routes>
  </>
}

export default App;