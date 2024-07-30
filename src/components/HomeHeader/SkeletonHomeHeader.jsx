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
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <rect x="70" y="33" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="-1" rx="0" ry="0" width="202" height="44" />
    <circle cx="330" cy="33" r="26" />
    <rect x="1" y="56" rx="0" ry="0" width="250" height="11" />
  </ContentLoader>
);

export default SkeletonHomeHeader;
