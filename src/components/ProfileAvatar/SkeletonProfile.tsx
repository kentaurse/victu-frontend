import React from 'react'
import ContentLoader from "react-content-loader";


const SkeletonProfile = () => {
  return (
    <ContentLoader
    className="profile-avatar"
    speed={2}
    viewBox="0 0 315 121"
    backgroundColor="#7276d7"
    foregroundColor="#aeb0dc"
  >
    <rect x="72" y="95" rx="5" ry="5" width="170" height="23" />
    <circle cx="157" cy="40" r="40" />
  </ContentLoader>  )
}

export default SkeletonProfile