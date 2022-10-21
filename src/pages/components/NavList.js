import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavList = () => {
  const navigate = useNavigate();
  return (
    <NavListContainer>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "bold" : "")}
          to="/about-me"
        >
          About Me :)
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "bold" : "")}
          to="/project"
        >
          Project
        </NavLink>
      </div>
    </NavListContainer>
  );
};

export default NavList;

const NavListContainer = styled.div`
  background-color: #000;
  opacity: 50%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 20%;

  .nav-container {
    display: flex;
    flex-direction: column;

    a {
      padding: 20px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }

    .bold {
      font-size: 30px;
      font-weight: 700;
    }
  }
`;
