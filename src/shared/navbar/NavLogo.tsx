import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={false}
      animate={{ gap: isScrolled ? 8 : 16 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <Link to="/">
          <div
            className={`text-2xl ${isScrolled ? "md:text-4xl" : "md:text-5xl"}`}
          >
            🏏
          </div>
        </Link>
        <AnimatePresence>
          {!isScrolled && (
            <Link to="/" className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-sm md:text-4xl font-bold">Sports</h1>
                <div className="flex items-center space-x-1">
                  <span className="text-sm md:text-2xl font-bold text-gray-500">
                    Genius
                  </span>
                  <h1 className="text-sm md:text-xl font-bold primary-bg text-white px-1">
                    Hub
                  </h1>
                </div>
              </motion.div>
            </Link>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NavLogo;
