import { useState } from "react";
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
          <div
            className={`column__item ${
              index % 2 === 0 ? "span-12" : "span-17"
            }`}
            key={index}
          >
            <img src={item.url} alt={item.type} />
          </div>
        ))}
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
import graphics_1 from "../assets/graphics/1.png";
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
  { url: illustration_1, type: "illustration" },
  { url: illustration_3, type: "illustration" },
  { url: bg_3, type: "bg" },
  { url: illustration_4, type: "illustration" },
  { url: graphics_2, type: "graphics" },
  { url: illustration_6, type: "illustration" },
  { url: graphics_6, type: "graphics" },
  { url: illustration_2, type: "illustration" },
  { url: bg_4, type: "bg" },
  { url: illustration_5, type: "illustration" },
  { url: graphics_5, type: "graphics" },
  { url: bg_6, type: "bg" },
  { url: bg_2, type: "bg" },
  { url: graphics_7, type: "graphics" },
  { url: bg_1, type: "bg" },
  { url: graphics_1, type: "graphics" },
  { url: graphics_3, type: "graphics" },
  { url: graphics_4, type: "graphics" },
];
