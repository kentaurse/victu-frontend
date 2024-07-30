import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonHomeHeader = props => (
  <ContentLoader
    className="home-header"
    speed={2}
    width={362}
    height={70}
    viewBox="0 0 362 70"
    backgroundColor="#7276d7"
    foregroundColor="#aeb0dc"
    {...props}
  >
    <rect x="0" y="-1" rx="10" ry="10" width="202" height="44" />
    <circle cx="330" cy="33" r="26" />
    <rect x="1" y="56" rx="5" ry="5" width="250" height="11" />
  </ContentLoader>
);

export default SkeletonHomeHeader;
