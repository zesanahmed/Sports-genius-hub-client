import { motion } from "framer-motion";
import banner1 from "../../../assets/banner/banner7.jpg";

const CoachingBanner = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden" id="banner">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <img src={banner1} className="w-full bg-cover" />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
        <div className="w-full mt-20 md:w-2/4 px-8 md:px-16 text-white">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-xl text-white font-sans mb-4"
          >
            Premium courts and coaching!
          </motion.p>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-bold mb-7"
          >
            Elevate Your Game with Expert Coaching and Premier Courts
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="btn-primary">Book a Court</button>
          </motion.div>
        </div>
        <div className="w-full mt-20 md:w-1/2 px-8 md:pr-16 md:pl-40 text-white">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="text-2xl md:text-2xl font-semibold mb-2">
              Join Our Coaching Program!
            </h1>
            <p className="text-sm md:text-md font-sans text-gray-200">
              Experience top-notch training and elevate your skills with our
              expert coaches. Whether you're a beginner or looking to refine
              your technique, we have the right program for you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoachingBanner;
