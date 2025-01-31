import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./css/App.css";
import ModalProvider from "./context/modalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <NavBar />
        <Home />
      </ModalProvider>
    </>
  );
}

export default App;
