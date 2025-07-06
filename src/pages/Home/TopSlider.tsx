import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import banner1 from "../../assets/banner/banner1.jpeg";
import banner2 from "../../assets/banner/banner2.jpeg";
import banner3 from "../../assets/banner/banner3.jpeg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: banner1,
    headline: "GREAT FOR FAMILY AND KIDS BONDING",
  },
  {
    image: banner2,
    headline: "TRAIN TO PLAY LIKE A PRO!",
  },
  {
    image: banner3,
    headline: "ENJOY FITNESS AND FUN TOGETHER",
  },
];

const TopSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden" id="banner">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(163, 230, 53, 0.4), rgba(0,0,0,0) 33%), url(${slide.image})`,
            }}
          ></div>
        </motion.div>
      ))}

      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="w-full md:w-1/3 px-8 md:px-16 text-white space-y-6">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-xl text-lime-200"
          >
            Premium cricket and fitness club
          </motion.p>

          <motion.h1
            key={slides[current].headline}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-bold"
          >
            {slides[current].headline}
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Link
              to="below-banner"
              smooth={true}
              duration={500}
              className="text-sm md:text-xl border-b border-white hover:text-lime-300"
            >
              SCROLL DOWN
            </Link>
            <FaArrowDown className="text-lime-300 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
