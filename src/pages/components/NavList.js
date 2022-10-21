import React from "react";
import styled from "styled-components";

const NavList = () => {
  return (
    <NavListContainer>
      <ul>
        <li>About Me :)</li>
        <li>Project</li>
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
