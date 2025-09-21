import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // শুধু একবার রান হবে

  useEffect(() => {
    if (!isInView) return; // InView না হলে কাউন্টার শুরু হবে না

    let start = from;
    const interval = setInterval(() => {
      start += 1;
      if (start > to) {
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, from, to]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
