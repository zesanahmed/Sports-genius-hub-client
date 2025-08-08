import { Helmet } from "react-helmet-async";
import PopularInstructors from "./PopularInstructors";
import InfoSection from "./InfoSection";
import PopularClasses from "./PopularClasses";
import TopSlider from "./TopSlider";
import WelcomeClub from "./WelcomeClub";
import ProgramsSection from "./ProgramsSection";
import CounterSection from "./CounterSection";
import PopularProducts from "./PopularProducts";
import ClubMembership from "./ClubMembership";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Home</title>
      </Helmet>
      <TopSlider />
      <WelcomeClub />
      <CounterSection />
      <ProgramsSection />
      <PopularProducts />
      <ClubMembership />
      <PopularClasses />
      <PopularInstructors />
      <InfoSection />
    </div>
  );
};

export default Home;
