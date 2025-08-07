import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

const PopularProducts = () => {
  const [row1InViewTriggered, setRow1InViewTriggered] = useState(false);
  const [row2InViewTriggered, setRow2InViewTriggered] = useState(false);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
  });
  const { ref: row2Ref, inView: row2InView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (sectionInView) {
      setRow1InViewTriggered(true);
    }
  }, [sectionInView]);

  useEffect(() => {
    if (row2InView) {
      setRow2InViewTriggered(true);
    }
  }, [row2InView]);

  return (
    <div ref={sectionRef} className="py-10 px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <p className="text-gray-600 text-xl font-semibold font-sans mt-2">
            Our Store
          </p>
          <h2 className="text-3xl md:text-6xl font-semibold">
            POPULAR PRODUCTS
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.slice(0, 4).map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={row1InViewTriggered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <div
        ref={row2Ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {products.slice(4, 8).map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={row2InViewTriggered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
