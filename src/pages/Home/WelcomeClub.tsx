const WelcomeClub = () => {
  return (
    <div className="md:flex gap-8 my-20 w-full">
      <div className="relative md:ml-8 md:w-1/2">
        <img
          className="mx-auto md:w-5/6 md:h-screen"
          src="https://i.pinimg.com/1200x/33/96/6f/33966f6bc27bc59fe9644dfcf17fac95.jpg"
        />
        <p className="text-white text-4xl font-semibold bg-lime-950 text-center md:py-12 md:px-12 md:absolute bottom-0 right-5">
          OUR COURTS MAKE <br /> THE WORLDS TOP 10
        </p>
      </div>
      <div className="md:w-1/2 md:px-20 mx-3 md:mx-auto my-auto">
        <p className="text-lg font-semibold mb-3">HELLO!</p>
        <h2 className="text-2xl md:text-5xl font-semibold mb-8">
          WE WELCOME YOU AT OUR CLUB
        </h2>
        <p className="text-lg text-gray-600 mb-4 font-sans">
          We are thrilled to have you join us on this exciting journey. Whether
          you are a seasoned athlete or a sports enthusiast looking to explore
          new horizons, our club offers a warm and inviting environment for
          everyone.
        </p>
        <p className="text-lg text-gray-600 mb-10 font-sans">
          Come, be a part of our family, and lets create unforgettable memories
          together at our club!
        </p>
        <button className="btn text-white text-md font-sans px-14 py-7 rounded-none  bg-lime-400">
          ABOUT US
        </button>
      </div>
    </div>
  );
};

export default WelcomeClub;
