import "../styles/Hero.css";
import artist from "../assets/pen-tool.svg";

const Headline = () => {
  return (
    <div className="hero">
      <div className="wrapper container">
        <div className="hero__illustration">
          <img src={artist} alt="women holding a pen tool in illustration" />
        </div>
        <div className="hero__cta">
          <h1 className="cta__header">
            THIS IS <span className="cta__header--accent">AUBREY</span>
          </h1>
          <p className="cta__text">
            An Artist, Graphic Designer, and Illustrator. Crafting imagination,
            one brushstroke at a time.
          </p>
          <a href="#" className="cta__btn">
            CONTACT ME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headline;
