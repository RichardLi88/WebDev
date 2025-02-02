import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./css/App.css";
import ModalProvider from "./context/modalContext";
import ProductProvider from "./context/productContext";

function App() {
  return (
    <>
      <ProductProvider>
        <ModalProvider>
          <NavBar />
          <Home />
        </ModalProvider>
      </ProductProvider>
    </>
  );
}

export default App;
