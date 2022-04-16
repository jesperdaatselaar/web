import { motion } from "framer-motion";
function Card(props) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
  );
}

export default Card;
