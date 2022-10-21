import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProjectList from "./ProjectList";

const Project = () => {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    fetch("/data/project.json")
      .then((res) => res.json())
      .then((data) => setProjectList(data.project));
  }, []);

  return (
    <Background>
      <ProjectContainer>
        <ul className="project-content">
          <ProjectList projectList={projectList} />
        </ul>
      </ProjectContainer>
    </Background>
  );
};

export default Project;

const ProjectContainer = styled.div`
  height: 100vh;

  .project-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 70%;
    margin-top: 10%;
  }
`;
