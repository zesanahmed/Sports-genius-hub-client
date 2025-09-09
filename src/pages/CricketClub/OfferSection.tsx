import { motion } from "framer-motion";
import { FaTools, FaTrophy, FaShower, FaUserTie } from "react-icons/fa";

const offers = [
  {
    icon: <FaTools size={80} className="text-blue-500/90" />,
    title: "PREMIUM TOOLS",
  },
  {
    icon: <FaTrophy size={80} className="text-blue-500/90" />,
    title: "TOP TOURNAMENTS",
  },
  {
    icon: <FaShower size={80} className="text-blue-500/90" />,
    title: "LOCKERS & SHOWERS",
  },
  {
    icon: <FaUserTie size={80} className="text-blue-500/90" />,
    title: "EXPERT SUPERVISION",
  },
];

const OfferSection = () => {
  return (
    <div className="mt-20 px-20">
      <h1 className="uppercase text-lg font-semibold font-sans">
        What we offer
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-between gap-20 mt-4">
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-semibold">
            OUR TOP MEMBERSHIP SERVICES FOR YOU
          </h1>
        </div>
        <div className="w-full md:w-1/2 text-lg text-gray-600 font-sans">
          <p className="mb-6">
            Our membership program provides exclusive privileges, including
            priority access to events, discounted services, and special offers
            tailored for valued members.
          </p>
          <p className="mb-14">
            Enroll today to enjoy year-round benefits while being part of a
            community dedicated to excellence and growth.
          </p>
        </div>
      </div>
      <section className="mb-10 bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden group cursor-pointer flex flex-col h-60 py-2 group border-r-2 border-gray-400/30"
            >
              <div className="mb-6">{offer.icon}</div>
              <h3 className="text-2xl font-semibold mb-6">{offer.title}</h3>

              <button className="flex items-center gap-2 py-2  rounded-full overflow-hidden">
                {/* Hidden text, slides in on hover */}
                <span className="max-w-0 overflow-hidden text-lg font-sans font-semibold whitespace-nowrap transition-all duration-800 ease-in-out group-hover:max-w-xs">
                  Read More
                </span>
                {/* Arrow (always visible) */}
                <span className="text-2xl transition-transform duration-800 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfferSection;
