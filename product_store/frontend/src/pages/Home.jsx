import { useContext, useEffect } from "react";
import Modal from "../components/Modal";
import "../css/Home.css";
import { modalContext } from "../context/modalContext";
import Card from "../components/Card";
import { getProducts } from "../function/functions";
import { ProductContext } from "../context/productContext";

function Home() {
  const { modal, toggleModal } = useContext(modalContext);
  const { products, setProducts } = useContext(ProductContext);

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
      {modal && <Modal modalType={"create"} toggleModal={toggleModal} />}
      <div className="home-container">
        {products.map((product, index) => {
          return <Card key={product._id} data={product} />;
        })}
      </div>
    </>
  );
}

export default Home;
