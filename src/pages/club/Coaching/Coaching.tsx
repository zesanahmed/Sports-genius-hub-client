import React from "react";
import CoachingBanner from "./CoachingBanner";
import { Helmet } from "react-helmet-async";

const Coaching = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Coaching</title>
      </Helmet>
      <CoachingBanner />
    </div>
  );
};

export default Coaching;
