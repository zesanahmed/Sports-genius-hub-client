import FadeInSection from "../../shared/FadeInSection";
import img1 from "../../assets/programs/Cricket.jpeg";
import img2 from "../../assets/programs/For-kids.jpeg";
import img3 from "../../assets/programs/Squash.jpeg";
import img4 from "../../assets/programs/Private-group.jpeg";

const ProgramsSection = () => {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="https://images.unsplash.com/photo-1624193757636-b829dfa06a1b?q=80&w=948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Color Shadow Overlay */}
      <div className="absolute inset-0 gradient-secondary"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24 pb-20">
        <p className="text-white font-bold font-sans uppercase text-sm tracking-widest">
          Explore Our Programs
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-7">
          Find the one for you
        </h1>

        {/* Cards */}
        <FadeInSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mb-8">
          {[
            { title: "CRICKET COACHING", img: img1 },
            { title: "CRICKET FOR KIDS", img: img2 },
            { title: "SQUASH COACHING", img: img3 },
            { title: "PRIVATE GROUP", img: img4 },
          ].map((item, idx) => (
            <div key={idx} className="relative group w-64 h-96 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Number from top */}
              <span className="absolute top-10 left-10 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 translate-y-[-20px] group-hover:translate-y-0 transition-all duration-500">
                {idx + 1}.
              </span>
              {/* Title at bottom */}

              <div className="absolute bottom-2 group-hover:mb-6 left-0 w-full text-center translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-2xl font-bold mb-1">
                  {item.title}
                </h3>

                {/* Subtitle rising from bottom */}
                <p className="text-lg text-gray-200 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Learn from the best
                </p>
              </div>
            </div>
          ))}
        </FadeInSection>

        {/* Call to Action */}
        <button className="btn-primary">Join Now</button>
      </div>
    </section>
  );
};

export default ProgramsSection;
