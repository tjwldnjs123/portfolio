import React from "react";
import { Rotate } from "react-reveal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImg from "../assets/backgroundImg.png";
import { BsGithub } from "react-icons/bs";

const Main = () => {
  const navigate = useNavigate();
  return (
    <ListContainer>
      <li onClick={() => navigate("/about-me")}>
        <Rotate>
          <h1>About me :)</h1>
        </Rotate>
      </li>
      <li onClick={() => navigate("/project")}>
        <Rotate>
          <h1>Project</h1>
        </Rotate>
      </li>
      <li>
        <Rotate>
          <a
            href="https://velog.io/@tjwldnjs4457/series"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
        </Rotate>
      </li>
      <li>
        <Rotate>
          <a
            href="https://github.com/tjwldnjs123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </Rotate>
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
