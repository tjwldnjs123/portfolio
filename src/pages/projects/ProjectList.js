import React, { useState } from "react";
import { GiFallingStar } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectList = ({ projectList, active, setActive }) => {
  return (
    <ProjectListContainer>
      {projectList.map((project) => {
        return (
          <div className="project-list-container">
            <div
              className="project-title"
              onClick={(e) => {
                setActive(e.target.textContent);
              }}
            >
              <GiFallingStar
                className={active === project.title ? "active-icon" : ""}
                size="40"
              />
              <span className={active === project.title ? "active-title" : ""}>
                {project.title}
              </span>
            </div>
            {project.content && (
              <div
                className={
                  active === project.title
                    ? "project-content-container"
                    : "disabled"
                }
              >
                <video autoPlay controls>
                  <source src={project.content} type="video/mp4" />
                </video>
                <div className="description">
                  <p>내가 구현한 페이지 💫</p>
                  <ul>
                    {project.description.map((content) => {
                      return <li>{content}</li>;
                    })}
                  </ul>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
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
  flex-wrap: wrap;
  width: 100%;
  padding-right: 10%;
  color: #fff;

  .project-list-container {
    width: 170px;
    display: flex;

    .active-icon {
      color: #2786ff;
    }

    .project-title {
      height: 70px;
      text-align: center;

      span {
        margin-left: 10px;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: #2786ff;
        }
      }
      .active-title {
        color: #2786ff;
      }
    }

    .disabled {
      display: none;
    }

    .project-content-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: fixed;
      top: 100px;
      left: 25%;
      width: 900px;
      height: 700px;

      video {
        width: 100%;
        height: 500px;
      }

      .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 300px;
        padding-top: 1%;

        p {
          font-size: 20px;
          padding: 2%;
        }

        li {
          text-align: center;
          line-height: 20px;
        }
      }

      a {
        text-align: center;
        font-size: 25px;
      }
    }
  }
`;
