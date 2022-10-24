import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "./components/Background";

const AboutMe = () => {
  return (
    <Background>
      <AboutMeContainer>
        <div className="fade"> </div>

        <section className="about-me-container">
          <div className="content">
            <div className="title">
              <p className="bold">프론트엔드 개발자 서지원</p>
              <p>개발에 대한 흥미 많고 열정 가득한 서지원 입니다.</p>
            </div>

            <p>개발의 가치는 여러 사람과의 협업에서 우러나온다고 생각합니다.</p>
            <p>
              사람과의 소통을 중요시하며 열심히 달려나갈 준비가 되어 있습니다.
            </p>
            <p>저는 맥주, 음악감상, 웹을 사랑합니다. 반갑습니다 ^^</p>
            <br />
            <p className="bold">TECH STACK</p>

            <p>Html</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Recoil</p>
            <p>Redux</p>
            <p>Styled-components</p>
            <p>git</p>
            <br />
            <p>감사합니다 :)</p>
          </div>
        </section>
      </AboutMeContainer>
    </Background>
  );
};

export default AboutMe;

const move = keyframes`
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fade {
    position: relative;
    width: 100%;
    min-height: 60vh;
    top: -25px;
    background-image: linear-gradient(0deg, transparent, black 75%);
    z-index: 1;
  }

  .about-me-container {
    margin-right: 320px;
    display: flex;
    justify-content: center;
    position: relative;
    height: 800px;
    color: #feda4a;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 500%;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 600px;
    text-align: center;

    .content {
      position: relative;
      top: 9999px;
      transform-origin: 50% 100%;
      animation: ${move} 80s linear infinite;

      .bold {
        font-size: 40px;
        font-weight: 700;
      }
      .title {
        font-size: 50%;
        text-align: center;

        h1 {
          text-align: center;
        }
      }

      p {
        width: 1200px;
        font-size: 30px;
      }
    }
  }
`;
