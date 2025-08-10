import img1 from "../../assets/sports/sports.jpg";
import img2 from "../../assets/sports/sports1.jpg";
import img3 from "../../assets/sports/sports2.jpg";
import img4 from "../../assets/sports/sports3.jpg";
import img5 from "../../assets/sports/sports4.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  {
    src: img1,
    title: "Group Classes",
    category: "Sports",
    link: "/tennis-training",
  },
  {
    src: img2,
    title: "Free Lessons",
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
    title: "Tournaments",
    category: "Sports",
    link: "/tournament",
  },
];

const SportsSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[600px]">
      {/* Left big image */}
      <div className="md:w-1/2 h-full overflow-hidden relative group cursor-pointer">
        <Link to="/featured">
          <img
            src={img5}
            alt="Featured"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Text Overlay */}
          <div className="absolute flex flex-col gap-2 bottom-8 left-8 overflow-hidden ">
            <div
              className="bg-black text-white
      w-[60%] h-12 opacity-0
      group-hover:w-full group-hover:opacity-100
      transition-all duration-300 ease-out
      px-4 py-2"
            >
              <h3 className="text-2xl font-semibold whitespace-nowrap">
                CRICKET CLUB
              </h3>
            </div>
            <div
              className="bg-black text-white
      w-[25%] h-8 opacity-0
      group-hover:w-[50%] group-hover:opacity-100
      transition-all duration-300 ease-out
      text-center"
            >
              <p className="text-lg">Sports</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Right 4 images */}
      <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 h-full">
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
              <div className="absolute flex flex-col gap-2 bottom-8 left-8 overflow-hidden uppercase">
                <div
                  className="bg-black text-white
      w-[60%] h-12 opacity-0
      group-hover:w-full group-hover:opacity-100
      transition-all duration-300 ease-out
      px-4 py-2"
                >
                  <h3 className="text-2xl font-semibold whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
                <div
                  className="bg-black text-white
      w-[25%] h-8 opacity-0
      group-hover:w-[50%] group-hover:opacity-100
      transition-all duration-300 ease-out
      text-center"
                >
                  <p className="text-lg">{item.category}</p>
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
