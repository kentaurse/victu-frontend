import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./carouselStyle.css";
import CarouselItem from "./CarouselItem/CarouselItem";

const Carousel = ({ contentData }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const currentCarousel = carousel.current;
    setWidth(currentCarousel.scrollWidth - currentCarousel.offsetWidth);
  }, [contentData]);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="carousel-inner"
      >
        {contentData?.map(content => (
          <CarouselItem key={content?.id} content={content} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
