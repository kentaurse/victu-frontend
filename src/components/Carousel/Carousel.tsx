import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import "./carouselStyle.css";
import CarouselItem from "./CarouselItem/CarouselItem";
import { IExerciseData, IMealData } from "../../types/types";

interface CarouselProps {
  contentData: IExerciseData[] | IMealData[] | null;
}

const Carousel: FC<CarouselProps> = ({ contentData }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const currentCarousel = carousel.current;
    setWidth(currentCarousel!.scrollWidth - currentCarousel!.offsetWidth);
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
          <CarouselItem key={content.id} content={content} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
