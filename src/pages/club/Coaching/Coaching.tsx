import React from "react";
import CoachingBanner from "./CoachingBanner";
import { Helmet } from "react-helmet-async";
import WelcomeCoaching from "./WelcomeCoaching";
import TrainingSection from "./TrainingSection";
import ArticleSection from "./ArticleSection";

const Coaching = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Coaching</title>
      </Helmet>
      <CoachingBanner />
      <WelcomeCoaching />
      <TrainingSection />
      <ArticleSection />
    </div>
  );
};

export default Coaching;
