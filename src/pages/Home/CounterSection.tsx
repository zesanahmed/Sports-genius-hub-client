import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type CounterItem = {
  title: string;
  value: number;
};

const stats: CounterItem[] = [
  { title: "COURTS", value: 67 },
  { title: "COACHES", value: 35 },
  { title: "YEARS", value: 12 },
  { title: "CLUBS", value: 15 },
];

export default function CounterSection() {
  return (
    <section className="bg-white mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, idx) => (
          <CounterCard key={idx} title={stat.title} value={stat.value} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({ title, value }: CounterItem) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1500; // ms
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, value, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center"
    >
      {/* Background big number */}
      <span className="absolute text-[8rem] sm:text-[12rem] font-bold text-black/5 select-none">
        {count}
      </span>

      {/* Foreground title */}
      <span className="relative text-2xl font-bold tracking-wide text-black">
        {title}
      </span>
    </motion.div>
  );
}
