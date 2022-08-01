import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/home-animation.json";

const Animation = () => {
  return <Lottie loop animationData={lottieJson} play />;
};

export default Animation;
