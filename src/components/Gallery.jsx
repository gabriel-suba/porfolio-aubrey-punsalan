import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Gallery.css";

const Gallery = () => {
  const [arts, setArts] = useState([...gallery]);
  const [type, setType] = useState("all");

  const handleFilter = (filter) => {
    if (filter === "all") {
      setArts([...gallery]);
      setType(filter);
      return;
    }

    const result = gallery.filter((art) => filter === art.type);
    setType(filter);
    setArts([...result]);
  };

  return (
    <div className="gallery container">
      {/* TODO: FILTER FUNCTION */}
      <h2 className="gallery__header">MY PREVIOUS WORKS</h2>
      <div className="gallery__filter">
        <div
          onClick={() => handleFilter("all")}
          className={`filter__btn ${type === "all" ? "filter__btn--curr" : ""}`}
        >
          All
        </div>
        <div
          onClick={() => handleFilter("illustration")}
          className={`filter__btn ${
            type === "illustration" ? "filter__btn--curr" : ""
          }`}
        >
          Illustrations
        </div>
        <div
          onClick={() => handleFilter("graphics")}
          className={`filter__btn ${
            type === "graphics" ? "filter__btn--curr" : ""
          }`}
        >
          Graphics Design
        </div>
        <div
          onClick={() => handleFilter("bg")}
          className={`filter__btn ${type === "bg" ? "filter__btn--curr" : ""}`}
        >
          Background
        </div>
      </div>
      <div className="gallery__masonry">
        {arts.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`column__item ${
              item.orientation === "h" ? "span-12" : "span-17"
            }`}
            key={index}
          >
            <img src={item.url} alt={item.type} />
          </motion.div>
        ))}
      </div>
      <div className="gallery__reels gallery__header">
        <h2>Checkout my animation reels!</h2>
        <div className="reels__wrapper">
          <iframe
            className="reels__frame"
            src="https://www.youtube.com/embed/ACNZORfPolE?si=fzuKDgM8pcSuHeP3&amp;controls=0"
            title="YouTube video player"
          ></iframe>
          <iframe
            className="reels__frame"
            src="https://www.youtube.com/embed/P5oeAHm2ezU?si=DOhu8AKtYGvaOD93&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import illustration_1 from "../assets/illustration/1.png";
import illustration_2 from "../assets/illustration/2.png";
import illustration_3 from "../assets/illustration/3.png";
import illustration_4 from "../assets/illustration/4.png";
import illustration_5 from "../assets/illustration/5.png";
import illustration_6 from "../assets/illustration/6.png";
import graphics_2 from "../assets/graphics/2.png";
import graphics_3 from "../assets/graphics/3.png";
import graphics_4 from "../assets/graphics/4.png";
import graphics_5 from "../assets/graphics/5.png";
import graphics_6 from "../assets/graphics/6.png";
import graphics_7 from "../assets/graphics/7.png";
import bg_1 from "../assets/bg/1.png";
import bg_2 from "../assets/bg/2.png";
import bg_3 from "../assets/bg/3.png";
import bg_4 from "../assets/bg/4.png";
import bg_6 from "../assets/bg/6.png";

const gallery = [
  { url: illustration_1, type: "illustration", orientation: "h" },
  { url: illustration_2, type: "illustration", orientation: "p" },
  { url: illustration_3, type: "illustration", orientation: "p" },
  { url: illustration_4, type: "illustration", orientation: "p" },
  { url: illustration_5, type: "illustration", orientation: "p" },
  { url: illustration_6, type: "illustration", orientation: "p" },
  { url: graphics_2, type: "graphics", orientation: "h" },
  { url: graphics_3, type: "graphics", orientation: "h" },
  { url: graphics_4, type: "graphics", orientation: "h" },
  { url: graphics_5, type: "graphics", orientation: "h" },
  { url: graphics_6, type: "graphics", orientation: "h" },
  { url: graphics_7, type: "graphics", orientation: "p" },
  { url: bg_6, type: "bg", orientation: "p" },
  { url: bg_1, type: "bg", orientation: "h" },
  { url: bg_2, type: "bg", orientation: "h" },
  { url: bg_3, type: "bg", orientation: "h" },
  { url: bg_4, type: "bg", orientation: "h" },
];
