import { Helmet } from "react-helmet-async";
import CricketClubBanner from "./CricketClubBanner";
import OfferSection from "./OfferSection";
import PersonalSection from "./PersonalSection";
import PricingSection from "./PricingSection";
import CoachingProgramme from "./CoachingProgramme";

const CricketClub = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Cricket Club</title>
      </Helmet>
      <CricketClubBanner />
      <OfferSection />
      <CoachingProgramme />
      <PersonalSection />
      <PricingSection />
    </div>
  );
};

export default CricketClub;
