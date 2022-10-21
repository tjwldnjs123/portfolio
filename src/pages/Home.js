import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/backgroundImg.png";

const Home = () => {
  return (
    <HomeContainer>
      <header>
        <ul>
          <li>about</li>
          <li></li>
        </ul>
      </header>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});

  ul {
    height: 50px;
    border: 1px solid red;
    color: #fff;
  }
`;
