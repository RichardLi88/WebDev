import { createContext, useState } from "react";
import { createProduct, deleteProduct } from "../function/functions";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function handleAddProduct(product) {
    try {
      const { data } = await createProduct(product);
      setProducts([...products, data]);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  async function handleDeleteProduct(id) {
    try {
      const result = await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <ProductContext.Provider
      value={{ products, setProducts, handleAddProduct, handleDeleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
