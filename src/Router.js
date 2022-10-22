import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/projects/Project";

function Router() {
  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
