import { Helmet } from "react-helmet-async";
import CricketClubBanner from "./CricketClubBanner";
import OfferSection from "./OfferSection";
import PersonalSection from "./PersonalSection";
import PricingSection from "./PricingSection";

const CricketClub = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Cricket Club</title>
      </Helmet>
      <CricketClubBanner />
      <OfferSection />
      <PersonalSection />
      <PricingSection />
    </div>
  );
};

export default CricketClub;
