import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import styled from "styled-components";
import ProjectList from "./ProjectList";

const Project = () => {
  const [projectList, setProjectList] = useState([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    fetch("/portfolio/data/project.json")
      .then((res) => res.json())
      .then((data) => setProjectList(data.project));
  }, []);

  return (
    <Background>
      <ProjectContainer>
        <ul
          className={active.length > 1 ? "project-header" : "project-content"}
        >
          <ProjectList
            projectList={projectList}
            active={active}
            setActive={setActive}
          />
        </ul>
      </ProjectContainer>
    </Background>
  );
};

export default Project;

const ProjectContainer = styled.div`
  height: 100vh;
  min-width: 100%;

  .project-header {
    display: felx;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }

  .project-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
