import img from "../../assets/sports/game.jpg";

const MakeYourGame = () => {
  return (
    <section className="relative h-[500px] w-full">
      {/* Background Image */}
      <img
        src={img}
        alt="Make Your Game Background"
        className="absolute opacity-25 inset-0 w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-[160px] font-semibold uppercase tracking-widest">
          Make Your
        </h1>
        <h1 className="text-5xl md:text-[160px] font-semibold uppercase tracking-widest">
          Game
        </h1>
      </div>
    </section>
  );
};

export default MakeYourGame;
