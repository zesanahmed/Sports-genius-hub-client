import img from "../../../assets/sports/coaching.jpg";
import img1 from "../../../assets/banner/banner6.jpeg";
const WelcomeCoaching = () => {
  return (
    <div className="md:flex gap-30 mt-20 w-full mb-20 px-20">
      <div className="md:w-2/5">
        <img src={img} alt="" />
      </div>
      <div className="md:w-3/5 ">
        <h1 className="text-md font-sans font-semibold mb-2">WHO WE ARE</h1>
        <h2 className="text-black md:text-6xl font-semibold mb-6">
          Everyone is Welcome <br /> to Our Coaching Program
        </h2>
        <p className="text-gray-600 mb-10 font-sans text-lg">
          We are excited to have you join our coaching program! Whether you're a
          beginner looking to learn the basics or an experienced player aiming
          to refine your skills, we have the right program for you.
        </p>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default WelcomeCoaching;
