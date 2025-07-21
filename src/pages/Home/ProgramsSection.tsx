import React from "react";

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
      <div className="absolute inset-0 bg-gradient-to-r from-lime-900/60 to-black/90 "></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20 pb-16">
        <p className="text-white font-bold font-sans uppercase text-sm tracking-widest">
          Explore Our Programs
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-7">
          Find the one for you
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mb-8">
          {[
            { title: "Tennis Coaching", img: "/assets/tennis.jpg" },
            { title: "Squash Training", img: "/assets/squash.jpg" },
            { title: "Group Programs", img: "/assets/group.jpg" },
            { title: "Group Programs", img: "/assets/group.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="w-64 h-96 bg-white p-4 shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="btn-primary">Join Now</button>
      </div>
    </section>
  );
};

export default ProgramsSection;
