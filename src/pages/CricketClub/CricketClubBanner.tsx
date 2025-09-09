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
            className="text-3xl md:text-7xl font-bold mt-36"
          >
            Elevate Your Game with Our Premier Cricket and Fitness Club
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-xl text-white font-sans"
          >
            The ultimate destination for cricket enthusiasts and fitness seekers
          </motion.p>

          <button className="btn-primary hover:bg-white hover:text-[rgb(146,181,41)]">
            Join our club
          </button>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center cursor-pointer mt-14"
          >
            <FaArrowDown className="text-4xl animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CricketClubBanner;
