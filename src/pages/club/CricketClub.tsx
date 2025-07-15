import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CricketClub = () => {
  return (
    <div className="bg-base-100 text-gray-900">
      <Helmet>
        <title>Cricket Club | Sports Genius Hub</title>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/FxzBYR9/cricket-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/40 to-black/20" />
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Premium Cricket Club
          </h1>
          <p className="text-lg md:text-xl">
            Unlock your potential with our professional training and tournaments
          </p>
        </motion.div>
      </section>

      {/* Club Features Section */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Professional Coaching",
              desc: "Train under certified coaches and ex-national players.",
              icon: "🏏",
            },
            {
              title: "Modern Facilities",
              desc: "Practice nets, turf wickets, fitness zones, and equipment.",
              icon: "🏟️",
            },
            {
              title: "Weekly Matches",
              desc: "Regular internal and external tournaments for all age groups.",
              icon: "📅",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Now CTA */}
      <section className="bg-lime-100 py-16 px-4 text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Join the Club?
        </motion.h2>
        <motion.button
          className="btn btn-lg btn-success text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Join Now
        </motion.button>
      </section>
    </div>
  );
};

export default CricketClub;
