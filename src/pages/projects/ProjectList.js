import React, { useState } from "react";
import { GiFallingStar } from "react-icons/gi";
import styled from "styled-components";

const ProjectList = ({ projectList }) => {
  const [active, setActive] = useState("");

  return (
    <ProjectListContainer>
      {projectList.map((project) => {
        return (
          <div className="project-list-container">
            <GiFallingStar className="icon" size="50" />
            <div
              className="project-title"
              onClick={(e) => {
                setActive(e.target.textContent);
              }}
            >
              {project.title}
            </div>
            {project.content && (
              <div
                className={
                  active === project.title
                    ? "project-content-container"
                    : "disabled"
                }
              >
                {project.content}
              </div>
            )}
          </div>
        );
      })}
    </ProjectListContainer>
  );
};

export default ProjectList;

const ProjectListContainer = styled.li`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-right: 10%;
  color: #fff;

  .project-list-container {
    .icon {
      &:hover {
        color: #2786ff;
      }
    }
    .project-title {
      padding-top: 10px;
      text-align: center;
    }

    .disabled {
      display: none;
    }

    .project-content-container {
      position: relative;

      width: 800px;
      height: 600px;
      border: 1px solid red;
    }
  }
`;
