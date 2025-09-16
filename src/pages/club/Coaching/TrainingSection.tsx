import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import img from "../../../assets/sports/coaching-training.jpeg";
type Question = {
  id: number;
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "What is the best training method?",
    answer:
      "The best training method depends on the individual athlete's needs, but a combination of strength training, agility drills, and sport-specific skills practice is often effective.",
  },
  {
    id: 2,
    question: "How can I improve my stamina?",
    answer:
      "Improving stamina requires a combination of cardiovascular training, strength training, and proper nutrition. Incorporate activities like running, cycling, and swimming into your routine, and gradually increase the intensity and duration of your workouts.",
  },
  {
    id: 3,
    question: "How can I prevent injuries during training?",
    answer:
      "To prevent injuries, it's important to warm up properly, use the right equipment, and listen to your body. Incorporate flexibility and strength training into your routine, and don't ignore pain or discomfort.",
  },
];

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
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
  }, [from, to]);

  return <span>{count}</span>;
};

const TrainingSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-20 mb-20 h-[600px]">
      {/* Left Side Q&A */}
      <div className="mr-14 pt-10 h-[600px]">
        <h4 className="uppercase text-lg font-sans font-semibold mb-2">Q&A</h4>
        <h2 className="text-3xl md:text-6xl font-semibold mb-6">
          WE&apos;RE PROUD TO BE THE BEST AT TRAINING
        </h2>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="border-b border-gray-300 pb-3">
              <button
                className="w-full btn btn-ghost flex justify-between items-center text-xl text-left font-semibold"
                onClick={() => setActiveId(activeId === q.id ? null : q.id)}
              >
                {q.question}
                <span className="text-xl">{activeId === q.id ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {activeId === q.id && (
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 text-gray-600 text-lg font-sans overflow-hidden"
                  >
                    {q.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="relative flex justify-end">
        <img src={img} alt="Training" className="shadow-lg" />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-10 -left-15 md:w-64 bg-[rgb(175,214,57)] text-white p-10 shadow-lg"
        >
          <p className="uppercase mb-2 text-xs md:text-xl font-semibold">
            Coaches
          </p>
          <p className="text-3xl md:text-6xl mb-2 font-semibold">
            <Counter from={0} to={100} />+
          </p>
          <p className="text-md md:text-xl">Dedicated to your growth</p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-10 md:w-64 right-10 bg-black text-white p-10 shadow-lg"
        >
          <p className="uppercase mb-2 text-xs md:text-xl font-semibold">
            Courts
          </p>
          <p className="text-3xl md:text-6xl mb-2 font-semibold">
            <Counter from={0} to={16} />
          </p>
          <p className="text-lg md:text-xl">World-class experience</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
