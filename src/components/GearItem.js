import { motion } from "framer-motion";
function GearItem(props) {
  return (
    <motion.div
      key={props.id}
      className="column is-half"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      style={{ cursor: "pointer" }}
    >
      <div className="content box">
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </div>
    </motion.div>
  );
}

export default GearItem;
