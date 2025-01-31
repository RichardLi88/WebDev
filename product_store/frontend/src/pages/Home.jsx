import { useState, useContext } from "react";
import Modal from "../components/Modal";
import "../css/Home.css";
import { modalContext } from "../context/modalContext";

function Home() {
  const { modal, toggleModal } = useContext(modalContext);
  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
      <div className="home-container">hello worlds;</div>
    </>
  );
}

export default Home;
