import bgImg from "../../assets/membership/ball-bg.jpg";
import MembershipCard from "../../components/MembershipCard";

const programs = [
  { title: "CRICKET COACHING", img: "/images/coaching.jpg" },
  { title: "CRICKET FOR KIDS", img: "/images/kids.jpg" },
];

const ClubMembership = () => {
  return (
    <section className="relative text-white mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Color Shadow Overlay */}
      <div className="absolute inset-0 gradient-secondary"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center w-full p-20">
        {/* Cards */}
        <div className="w-1/2 mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7">
            {programs.map((item, idx) => (
              <MembershipCard
                key={idx}
                title={item.title}
                img={item.img}
                index={idx}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 px-10 md:px-20">
          <p className="text-white font-semibold font-sans text-md mb-4">
            OUR PLANS
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-7">
            CLUB MEMBERSHIP
          </h1>
          <p className="text-white font-sans text-lg mb-4">
            Join our exclusive CLUB Membership to unlock premium training
            programs, special events, and expert guidance tailored for
            passionate cricket lovers of all ages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubMembership;
