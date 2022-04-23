import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

function Modal({ showModal, setShowModal, modalImage }) {
  return (
    <div>
      {showModal ? (
        <div
          className="modal is-active"
          showModal={showModal}
          onClick={(e) => e.stopPropagation()}
        >
          <Backdrop onClick={() => setShowModal((prev) => !prev)} />
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.5 }}
            exit={{ scale: 0.5 }}
          >
            <p class="image is-16by9">
              <img src={modalImage} alt="" />
            </p>
          </motion.div>
          <button
            onClick={() => setShowModal((prev) => !prev)}
            class="modal-close is-large"
            aria-label="close"
          ></button>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
