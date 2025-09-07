import { Helmet } from "react-helmet-async";
import CricketClubBanner from "./CricketClubBanner";

const CricketClub = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Cricket Club</title>
      </Helmet>
      <CricketClubBanner />
    </div>
  );
};

export default CricketClub;
