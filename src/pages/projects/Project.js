import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProjectList from "./ProjectList";

const Project = () => {
  const [projectList, setProjectList] = useState([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    fetch("/data/project.json")
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

  .project-header {
    display: felx;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .project-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
