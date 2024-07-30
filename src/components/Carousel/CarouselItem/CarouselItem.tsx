import React, { FC } from "react";
import { motion } from "framer-motion";
import "./carouselItemStyle.css";
import { IExerciseData, IMealData } from "../../../types/types";

interface CarouselItemProps {
  content: IExerciseData | IMealData | null;
}

const CarouselItem: FC<CarouselItemProps> = ({ content }) => {
  const src = `https://www.youtube.com/embed/${content?.videoId}?controls=1`;

  return (
    <motion.div className="carousel-item">
      <div className="carousel-content-video">
        <iframe
          className="carousel-content-video"
          src={src}
          title={content?.title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
        ></iframe>
      </div>

      <div className="carousel-content-info">
        <div className="carousel-content-title">{content?.title}</div>
        <div className="carousel-content-subtitle">{content?.subtitle}</div>
      </div>
    </motion.div>
  );
};

export default CarouselItem;
