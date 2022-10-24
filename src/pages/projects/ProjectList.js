import React from "react";
import { GiFallingStar } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectList = ({ projectList, active, setActive }) => {
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
                  <p>내가 구현한 페이지 💫</p>
                  <ul>
                    {project.description.map((content) => {
                      return <li key={content}>{content}</li>;
                    })}
                  </ul>
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
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 100px;
      left: 25%;
      width: 900px;
      height: 700px;

      @media (max-width: 1080px) {
        width: 70%;
      }

      @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 70%;
      }
      video {
        width: 100%;
        height: 400px;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          width: 90%;
        }
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
          font-size: 17px;
          text-align: center;
          line-height: 25px;
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
