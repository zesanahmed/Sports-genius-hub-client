import { motion } from "framer-motion";

const ImgSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      {/* Left Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1547347298-4074fc3086f0"
        alt="Tennis player"
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Center Content */}
      <motion.div
        className="flex flex-col items-center justify-center text-center bg-lime-400 text-black p-8 rounded-lg h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="uppercase text-sm font-semibold tracking-widest">
          Best Cricket Gear
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
          Shop High-Quality <br /> Cricket Apparel For Comfort
        </h2>
        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded shadow hover:bg-gray-100 transition">
          Shop Now
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
        alt="Tennis shoes"
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
};

export default ImgSection;
