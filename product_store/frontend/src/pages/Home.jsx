import { useState, useContext, useEffect } from "react";
import Modal from "../components/Modal";
import "../css/Home.css";
import { modalContext } from "../context/modalContext";
import Card from "../components/Card";
import Pikachu from "../img/2.svg";

function Home() {
  const { modal, toggleModal } = useContext(modalContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      { name: "Hello", price: 100, image: Pikachu },
      { name: "Hello", price: 100, image: Pikachu },
      { name: "Hello", price: 100, image: Pikachu },
      { name: "Hello", price: 100, image: Pikachu },
      { name: "Hello", price: 100, image: Pikachu },
      { name: "Hello", price: 100, image: Pikachu },
    ]);
  }, []);

  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
      <div className="home-container">
        {products.map((product, index) => {
          return <Card key={index} data={product} />;
        })}
      </div>
    </>
  );
}

export default Home;
