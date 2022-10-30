import React from "react";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImg from "../assets/backgroundImg.png";
import { BsGithub } from "react-icons/bs";

const Main = () => {
  const navigate = useNavigate();
  return (
    <ListContainer>
      <li onClick={() => navigate("/about-me")}>
        <Zoom left>
          <h1>About me</h1>
        </Zoom>
      </li>
      <li onClick={() => navigate("/project")}>
        <Zoom left>
          <h1>Project</h1>
        </Zoom>
      </li>
      <li>
        <a
          href="https://velog.io/@tjwldnjs4457/series"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Zoom left>blog</Zoom>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/tjwldnjs123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Zoom left>
            <BsGithub />
          </Zoom>
        </a>
      </li>
    </ListContainer>
  );
};

export default Main;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});

  li {
    padding: 10px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
`;
