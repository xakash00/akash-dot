import React from "react";
import Lottie from "react-lottie";
import { StyledText } from "../../styledComponents/styles";
import * as animationData from "../../assets/lottie/noResults.json";
const NoResults = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <StyledText>No results matched your search</StyledText>
      <Lottie options={defaultOptions} height={"15rem"} width={"15rem"} />
    </>
  );
};

export default NoResults;
