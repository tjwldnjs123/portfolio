import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png";

const Background = (props) => {
  return <BackgroundContainer>{props.children}</BackgroundContainer>;
};

export default Background;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
`;
