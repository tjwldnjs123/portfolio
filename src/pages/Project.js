import React from "react";
import Background from "./components/Background";
import NavList from "./components/NavList";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const Project = () => {
  return (
    <Background>
      <ProjectContainer>
        <li>
          ajdsfdl
          <FaRegStar />
        </li>
      </ProjectContainer>
    </Background>
  );
};

export default Project;

const ProjectContainer = styled.ul`
  border: 1px solid red;
  li {
    color: #fff;
  }
`;
