import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonNotification = () => (
  <ContentLoader
    speed={2}
    width={330}
    height={115}
    viewBox="0 0 330 115"
    backgroundColor="#7276d7"
    foregroundColor="#aeb0dc"
  >
    <rect x="0" y="0" rx="30" ry="30" width="330" height="115" />
  </ContentLoader>
);

export default SkeletonNotification;
