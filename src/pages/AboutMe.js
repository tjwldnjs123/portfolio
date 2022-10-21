import React from "react";
import styled from "styled-components";
import Background from "./components/Background";
import NavList from "./components/NavList";

const AboutMe = () => {
  return (
    <Background>
      <AboutMeContainer></AboutMeContainer>
    </Background>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
`;
