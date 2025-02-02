import { createContext, useState } from "react";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../function/functions";

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

  async function handleUpdateProduct(newProduct, id) {
    try {
      const result = await updateProduct(newProduct, id);
      setProducts(
        products.map((product) => {
          if (product._id !== id) {
            return product;
          } else {
            console.log(result.data);
            return result.data;
          }
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        handleAddProduct,
        handleDeleteProduct,
        handleUpdateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
