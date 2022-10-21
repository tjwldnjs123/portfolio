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
        <ul className={active.length > 1 ? "" : "project-content"}>
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
  .project-content {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 70%;
    margin-top: 40%;
  }
`;
