import { createContext, useState } from "react";

export const modalContext = createContext();

function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <modalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </modalContext.Provider>
  );
}

export default ModalProvider;
