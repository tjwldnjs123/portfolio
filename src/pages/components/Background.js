import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png";
import NavList from "./NavList";

const Background = (props) => {
  return (
    <BackgroundContainer>
      <NavList />
      <div className="content">{props.children}</div>
    </BackgroundContainer>
  );
};

export default Background;

const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});

  .content {
    width: 100%;
    padding-left: 20%;
  }
`;
