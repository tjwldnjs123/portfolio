import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/Project";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
