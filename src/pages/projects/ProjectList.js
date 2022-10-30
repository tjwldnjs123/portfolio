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
                size="30"
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
                <video controls>
                  <source src={project.content} type="video/mp4" />
                </video>
                <div className="description-box">
                  <div className="description">
                    <button onClick={() => setModal((prev) => !prev)}>
                      {modal ? "동영상 다시보기 💫" : "회고록 바로가기 💫"}
                    </button>
                  </div>
                  {modal && <Memoir project={project} setModal={setModal} />}
                  <div className="github-box">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>github 바로가기</p>

                      <BsGithub />
                    </a>
                  </div>
                </div>
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
      color: #e8aa00;
    }

    .project-title {
      width: 800px;
      height: 100px;
      margin-top: 10px;
      text-align: center;

      @media (max-width: 990px) {
        width: 100px;
      }

      @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 80px;
      }
      @media (max-width: ${({ theme }) => theme.iphone}) {
        width: 45px;
      }

      span {
        margin-left: 10px;
        font-size: 16px;
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          font-size: 13px;
        }

        @media (max-width: ${({ theme }) => theme.iphone}) {
          font-size: 8px;
        }

        &:hover {
          color: #e8aa00;

          @media (max-width: ${({ theme }) => theme.iphone}) {
            font-size: 10px;
          }
        }
      }
      .active-title {
        /* color: #2786ff; */
        font-size: 19px;
        font-weight: 800;
        @media (max-width: ${({ theme }) => theme.iphone}) {
          font-size: 10px;
        }
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

      /* @media (max-width: 1080px) {
        width: 65%;
      } */

      /* @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 100%;
      } */
      video {
        width: 65%;
        height: 60%;

        /* @media (max-width: ${({ theme }) => theme.tablet}) {
          width: 80%;
        } */
      }

      .description-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 18%;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          width: 80%;
          margin-top: 50%;
        }

        .description {
          /* display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; */
          width: 100%;
          /* height: 40%; */
          /* padding-top: 1%; */

          button {
            padding-bottom: 5%;
            background-color: transparent;
            border-radius: 50%;
            border: none;
            font-size: 1.2rem;
            color: lightgray;
            cursor: pointer;

            @media (max-width: ${({ theme }) => theme.tablet}) {
              width: 100px;
              font-size: 0.7rem;
            }

            &:hover {
              border-bottom: 1px solid #e8aa00;
            }
          }
        }

        .github-box {
          border-radius: 50%;
          border: none;
          padding-bottom: 3%;
          width: 300px;
          &:hover {
            border-bottom: 1px solid #e8aa00;
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            .arrow {
              /* margin-right: 10px; */
              font-size: 1.2rem;
            }

            p {
              margin-right: 10px;
              font-size: 1.2rem;

              @media (max-width: ${({ theme }) => theme.tablet}) {
                width: 100px;
                font-size: 0.7rem;
                /* margin-right: 3px; */
              }
            }
          }
        }
      }
    }
  }
`;
