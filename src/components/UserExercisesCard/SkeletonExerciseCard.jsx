import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonExerciseCard = ({ props }) => {
  return (
    <ContentLoader
      className="move"
      speed={2}
      viewBox="0 0 362 201"
      backgroundColor="#7276d7"
      foregroundColor="#aeb0dc"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="90" height="25" />
      <rect x="0" y="45" rx="0" ry="0" width="240" height="110" />
      <rect x="0" y="165" rx="0" ry="0" width="160" height="17" />
      <rect x="0" y="193" rx="0" ry="0" width="60" height="12" />

      <rect x="265" y="45" rx="0" ry="0" width="240" height="110" />
      <rect x="265" y="165" rx="0" ry="0" width="160" height="17" />
      <rect x="265" y="193" rx="0" ry="0" width="60" height="12" />
    </ContentLoader>
  );
};

export default SkeletonExerciseCard;
