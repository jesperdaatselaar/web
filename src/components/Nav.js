import React from "react";
import { motion } from "framer-motion";
import IsMobile from "../hooks/isMobile";

function Nav() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <section className="section">
      <header className="navbar is-transparent">
        <div className="navbar-brand">
          <motion.a whileHover={{scale: 1.05}} 
            className="navbar-item has-text-weight-bold has-text-black"
            href="/"
          >
            Jesper van Daatselaar
          </motion.a>
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <motion.div
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
          id="navMenu"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.1, duration: 1.2 },
            },
            exit: { opacity: 0 },
          }}
          animate={IsMobile() ? (isActive ? "animate" : "exit") : "animate"}
        >
          <div className="navbar-start">
            <p className="navbar-item has-text-grey">A Dutch view on life.</p>
          </div>
          <nav className="navbar-end has-text-weight-bold">
            <motion.a whileHover={{scale: 1.1}} href="#" className="navbar-item has-text-black">
              About
            </motion.a>
            <motion.a whileHover={{scale: 1.1}} href="#" className="navbar-item has-text-black">
              Gear
            </motion.a>
            <motion.a whileHover={{scale: 1.1}} href="#" className="navbar-item has-text-black">
              Work
            </motion.a>
            <motion.a whileHover={{scale: 1.1}} href="#" className="navbar-item has-text-black">
              Contact
            </motion.a>
          </nav>
        </motion.div>
      </header>
    </section>
  );
}

export default Nav;
