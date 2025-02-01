import { useState, useContext, useEffect } from "react";
import Modal from "../components/Modal";
import "../css/Home.css";
import { modalContext } from "../context/modalContext";
import Card from "../components/Card";

import { getProducts } from "../function/functions";

function Home() {
  const { modal, toggleModal } = useContext(modalContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { success, data } = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
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
