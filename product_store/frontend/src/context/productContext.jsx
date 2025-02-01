import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [needUpdate, setNeedUpdate] = useState(false);

  return (
    <ProductContext.Provider value={{ needUpdate, setNeedUpdate }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
