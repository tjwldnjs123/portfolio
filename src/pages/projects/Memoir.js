import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

const Memoir = ({ project, setModal }) => {
  return (
    <MemoirContainer>
      <div className="icon">
        <BiArrowBack
          className="back"
          onClick={() => {
            setModal(false);
          }}
        />
      </div>
      <div className="modal-container">
        <div className="implementation-container">
          <h3>Parts of me</h3>
          {project.implementation.map((content) => {
            return <p key={content}>{content}</p>;
          })}
        </div>
        <div className="learned-container">
          <h3>What I learned</h3>
          {project.learned.map((content) => {
            return <p key={content}>{content}</p>;
          })}
        </div>
      </div>
    </MemoirContainer>
  );
};

export default Memoir;

const MemoirContainer = styled.div`
  position: fixed;
  top: 10%;
  width: 70%;
  height: 70%;
  background-color: #000;

  .icon {
    padding: 1.5%;

    .back {
      font-size: 25px;
      cursor: pointer;
    }
  }
  .modal-container {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    .implementation-container {
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
