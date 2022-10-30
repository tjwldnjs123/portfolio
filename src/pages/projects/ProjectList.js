import React, { useState } from "react";
import { GiFallingStar } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";
import Memoir from "./Memoir";

const ProjectList = ({ projectList, active, setActive }) => {
  const [modal, setModal] = useState(false);

  return (
    <ProjectListContainer>
      {projectList.map((project) => {
        return (
          <div key={project.id} className="project-list-container">
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
                  <button onClick={() => setModal((prev) => !prev)}>
                    회고록 바로가기 💫
                  </button>
                  {modal && <Memoir project={project} setModal={setModal} />}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>github으로 바로가기</p>
                  <AiOutlineArrowRight className="arrow" />
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
  flex-wrap: nowrap;
  width: 100%;
  padding-left: 3%;
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

        @media (max-width: ${({ theme }) => theme.tablet}) {
          font-size: 13px;
        }

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
      align-items: center;
      position: fixed;
      top: 100px;
      left: 25%;
      width: 70%;
      height: 80%;

      @media (max-width: 1080px) {
        width: 65%;
      }

      @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 50%;
      }
      video {
        width: 65%;
        height: 60%;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          width: 80%;
        }
      }

      .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;
        padding-top: 1%;

        button {
          padding: 2%;
          background-color: transparent;
          border-radius: 50%;
          border: none;
          font-size: 1.5rem;
          color: lightgray;
          cursor: pointer;

          &:hover {
            color: #2786ff;
          }
        }
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 25px;

        .arrow {
          margin-right: 10px;
          font-size: 12px;
        }

        p {
          margin-right: 10px;
          font-size: 12px;
          color: #2786ff;
        }
      }
    }
  }
`;
