import React from "react";
import { Rotate } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "./components/Background";

const Main = () => {
  const navigate = useNavigate();
  return (
    <Background>
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
      </ListContainer>
    </Background>
  );
};

export default Main;

const ListContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    padding: 10px;
    font-size: 30px;
    color: #fff;
  }
`;
