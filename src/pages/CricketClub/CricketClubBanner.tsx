import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import banner4 from "../../assets/banner/banner4.jpg";
import { Link as ScrollLink } from "react-scroll";

const CricketClubBanner = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <img src={banner4} className="w-full bg-cover" />
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full mt-32 text-center px-8 md:px-32 text-white space-y-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-bold"
          >
            Elevate Your Game with Our Premier Cricket and Fitness Club
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-xl text-white font-sans"
          >
            Premium cricket and fitness club
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-2 cursor-pointer mt-20"
          >
            <ScrollLink
              to="below-banner"
              smooth={true}
              duration={500}
              className="text-sm md:text-xl border-b border-white hover-primary-text"
            >
              SCROLL DOWN
            </ScrollLink>
            <FaArrowDown className="primary-text animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CricketClubBanner;
