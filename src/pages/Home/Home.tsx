import { Helmet } from "react-helmet-async";
import PopularInstructors from "./PopularInstructors";
import InfoSection from "./InfoSection";
import Club from "./Club";
import PopularClasses from "./PopularClasses";
import TopSlider from "./TopSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Home</title>
      </Helmet>
      <TopSlider />
      <PopularClasses />
      <PopularInstructors />
      <InfoSection />
      <Club />
    </div>
  );
};

export default Home;
