import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavList = () => {
  const navigate = useNavigate();
  return (
    <NavListContainer>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about-me")}>About Me :)</li>
        <li onClick={() => navigate("/project")}>Project</li>
      </ul>
    </NavListContainer>
  );
};

export default NavList;

const NavListContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 20%;

  ul {
    li {
      padding: 20px;
      font-size: 20px;
      color: #fff;
    }
  }
`;
