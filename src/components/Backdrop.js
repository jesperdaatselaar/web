import { motion } from "framer-motion";

function Backdrop({ onClick }) {
  return (
    <motion.div
      className="modal-background is-white"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
}

export default Backdrop;
