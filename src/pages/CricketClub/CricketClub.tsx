import { Helmet } from "react-helmet-async";
import CricketClubBanner from "./CricketClubBanner";
import OfferSection from "./OfferSection";

const CricketClub = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Cricket Club</title>
      </Helmet>
      <CricketClubBanner />
      <OfferSection />
    </div>
  );
};

export default CricketClub;
