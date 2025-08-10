import { Helmet } from "react-helmet-async";
import TopSlider from "./TopSlider";
import WelcomeClub from "./WelcomeClub";
import ProgramsSection from "./ProgramsSection";
import CounterSection from "./CounterSection";
import PopularProducts from "./PopularProducts";
import ClubMembership from "./ClubMembership";
import SportsSection from "./SportsSection";
import MakeYourGame from "./MakeYourGame";

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
      <SportsSection />
      <MakeYourGame />
    </div>
  );
};

export default Home;
