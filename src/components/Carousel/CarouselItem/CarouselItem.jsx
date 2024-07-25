import React from "react";
import { motion } from "framer-motion";
import "./carouselItemStyle.css";

const CarouselItem = ({ content }) => {
  const src = `https://www.youtube.com/embed/${content?.moveVideoId}?controls=1`;

  return (
    <motion.div className="carousel-item">
      <div className="carousel-content-video">
        <iframe
          className="carousel-content-video"
          src={src}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="carousel-content-info">
        <div className="carousel-content-title">{content?.moveTitle}</div>
        <div className="carousel-content-subtitle">{content?.moveSubtitle}</div>
      </div>
    </motion.div>
  );
};

export default CarouselItem;
