import React from "react";
import CoachingBanner from "./CoachingBanner";
import { Helmet } from "react-helmet-async";
import WelcomeCoaching from "./WelcomeCoaching";

const Coaching = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Coaching</title>
      </Helmet>
      <CoachingBanner />
      <WelcomeCoaching />
    </div>
  );
};

export default Coaching;
