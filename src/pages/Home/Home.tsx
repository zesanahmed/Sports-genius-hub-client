import { Helmet } from "react-helmet-async";
import PopularInstructors from "./PopularInstructors";
import InfoSection from "./InfoSection";
import PopularClasses from "./PopularClasses";
import TopSlider from "./TopSlider";
import WelcomeClub from "./WelcomeClub";
import NumberSection from "./NumberSection";
import ProgramsSection from "./ProgramsSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Home</title>
      </Helmet>
      <TopSlider />
      <WelcomeClub />
      <NumberSection />
      <ProgramsSection />
      <PopularClasses />
      <PopularInstructors />
      <InfoSection />
    </div>
  );
};

export default Home;
