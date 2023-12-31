import { motion } from "framer-motion";
import "../styles/Hero.css";
import artist from "../assets/pen-tool.svg";

const Headline = () => {
  return (
    <div className="hero">
      <div className="wrapper container">
        <motion.div
          initial={{ y: "50%", opacity: 0.5, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="hero__illustration"
        >
          <img src={artist} alt="women holding a pen tool in illustration" />
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hero__cta"
        >
          <h1 className="cta__header">
            THIS IS <span className="cta__header--accent">AUBREY</span>
          </h1>
          <p className="cta__text">
            An Artist, Graphic Designer, and Illustrator. Crafting imagination,
            one brushstroke at a time.
          </p>
          <a href="#contact-me" className="cta__btn">
            CONTACT ME
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Headline;
