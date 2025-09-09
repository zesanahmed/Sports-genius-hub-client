import clubImg1 from "../../assets/sports/club1.jpeg";
import clubImg2 from "../../assets/sports/club2.jpeg";

const PersonalSection = () => {
  return (
    <section className="relative text-white mt-20">
      {/* Color Shadow Overlay */}
      <div className="absolute inset-y-0 right-0 bg-black/88 w-[70%]"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex py-20 w-full p-10">
        {/* Cards */}
        <div className="w-1/2 mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
            {/* Card 1 */}
            <img src={clubImg1} className="w-64 h-[420px]"></img>
            {/* Card 2 */}
            <img src={clubImg2} className="w-64 h-[420px]"></img>
          </div>
        </div>
        <div className="w-1/2 px-10 md:px-10">
          <p className="text-white font-semibold uppercase font-sans text-md mb-4">
            personal approach
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            TRAINING FOR ALL AGES & SKILL LEVELS
          </h1>
          <p className="text-white font-sans text-lg mb-6">
            Our cricket club is dedicated to providing personalized training
            programs that cater to individual needs and skill levels.
          </p>
          <div className="text-white font-sans text-lg space-y-3 mb-6">
            <h1>
              <span className="text-green-500"> ✔</span> BEGINNER PROGRAMS
            </h1>
            <h1>
              <span className="text-green-500">✔</span> INTERMEDIATE PROGRAMS
            </h1>
            <h1>
              <span className="text-green-500">✔</span> ADVANCED PROGRAMS
            </h1>
          </div>
          <button className="btn-primary">About us</button>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
