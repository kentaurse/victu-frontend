import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonProgramCard = () => (
  <ContentLoader
    speed={2}
    className="program"
    viewBox="0 0 362 80"
    backgroundColor="#7276d7"
    foregroundColor="#aeb0dc"
  >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="40" />
    <rect x="0" y="66" rx="5" ry="5" width="193" height="14" />
    <circle cx="330" cy="40" r="20" />
  </ContentLoader>
);

export default SkeletonProgramCard;
