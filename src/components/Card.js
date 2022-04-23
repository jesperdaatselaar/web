import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <div
      className="column is-one-third"
      >
      <motion.div
        onClick={() => openModal()}
        className="card js-modal-trigger"
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.3 } }}
        style={{ cursor: "pointer" }}
      >
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={props.image.src} alt={props.image.alt || ""} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <strong>{props.title}</strong>
            <p>{props.description}</p>
          </div>
        </div>
      </motion.div>
      <Modal showModal={showModal} setShowModal={setShowModal} modalImage={props.image.src} />
    </div>
  );
}

export default Card;
