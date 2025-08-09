import img1 from "../../assets/products/ball.jpeg";
import img2 from "../../assets/products/ball.jpeg";
import img3 from "../../assets/products/helmet.jpg";
import img4 from "../../assets/products/batting gloves.jpeg";
import img5 from "../../assets/products/Leg Guard.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  {
    src: img1,
    title: "Cricket Bat",
    category: "Sports",
    link: "/tennis-training",
  },
  {
    src: img2,
    title: "Court Booking",
    category: "Sports",
    link: "/court-booking",
  },
  {
    src: img3,
    title: "Private Lessons",
    category: "Sports",
    link: "/private-lessons",
  },
  {
    src: img4,
    title: "Tournament",
    category: "Sports",
    link: "/tournament",
  },
];

const SportsSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[600px] gap-4">
      {/* Left big image */}
      <div className="md:w-1/2 h-full overflow-hidden relative group cursor-pointer">
        <Link to="/featured">
          <img
            src="/images/featured.jpg"
            alt="Featured"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 overflow-hidden">
            <div className="bg-black text-white px-4 py-2 w-0 group-hover:w-full transition-all duration-500 ease-out">
              <h3 className="text-lg font-bold">Featured Match</h3>
              <p className="text-gray-300 text-sm">Sports</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Right 4 images */}
      <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
            <Link to={item.link}>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 overflow-hidden">
                <div className="bg-black text-white px-3 py-2 w-0 group-hover:w-full transition-all duration-500 ease-out">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.category}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsSection;
