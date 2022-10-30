import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "./components/Background";
import Bounce from "react-reveal/Bounce";

const AboutMe = () => {
  return (
    <Background>
      <AboutMeContainer>
        <section className="about-me-container">
          <div className="content-box">
            <div className="title">
              <p>프론트엔드 개발자 서지원</p>
              <p>개발에 대한 흥미 많고 열정 가득한 서지원 입니다.</p>
            </div>
            <div className="content">
              <p>
                개발의 가치는 여러 사람과의 협업에서 우러나온다고 생각합니다.
              </p>
              <p>
                사람과의 소통을 중요시하며 열심히 달려나갈 준비가 되어 있습니다.
              </p>
              <p>저는 맥주, 음악감상, 웹을 사랑합니다. 반갑습니다 ^^</p>
            </div>
            <div className="tech-stack-box">
              <p className="bold">TECH STACK</p>
              <div className="tech-btn">
                <Bounce>
                  <p>Html</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>React</p>
                  <p>Recoil</p>
                  <p>Redux</p>
                  <p>Styled-components</p>
                  <p>git</p>
                </Bounce>
              </div>
            </div>
          </div>
        </section>
      </AboutMeContainer>
    </Background>
  );
};

export default AboutMe;

// const move = keyframes`
//   0% {
//     top: 0;
//     transform: rotateX(20deg) translateZ(0);
//   }
//   100% {
//     top: -6000px;
//     transform: rotateX(25deg) translateZ(-2500px);
//   }
// `;

const AboutMeContainer = styled.div`
  height: 100vh;

  .about-me-container {
    height: 100%;
    color: #fff;

    .content-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0;
      text-align: center;

      .title {
        padding: 3%;
        font-size: 1.5rem;
        line-height: 2rem;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          font-size: 0.8rem;
        }
      }

      .content {
        padding-left: 0;
        padding-bottom: 3%;
        font-size: 1rem;
        line-height: 2rem;

        @media (max-width: ${({ theme }) => theme.tablet}) {
          font-size: 0.6rem;
        }
      }

      .tech-stack-box {
        .bold {
          font-size: 1.3rem;
          margin-bottom: 2%;

          @media (max-width: ${({ theme }) => theme.tablet}) {
            font-size: 0.8rem;
          }
        }
        .tech-btn {
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: ${({ theme }) => theme.tablet}) {
            flex-wrap: wrap;
            font-size: 0.7rem;
          }

          p {
            padding: 10px;
            margin-right: 2%;
          }
        }
      }
    }
  }
`;
