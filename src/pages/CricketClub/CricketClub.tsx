import { Helmet } from "react-helmet-async";
import CricketClubBanner from "./CricketClubBanner";
import OfferSection from "./OfferSection";
import PersonalSection from "./PersonalSection";

const CricketClub = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Cricket Club</title>
      </Helmet>
      <CricketClubBanner />
      <OfferSection />
      <PersonalSection />
    </div>
  );
};

export default CricketClub;
