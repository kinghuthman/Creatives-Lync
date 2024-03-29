import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import About from "./pages/about/About";
import HomePage from "./pages/Homepage";
import { Navbar } from "./pages/navigation/navbar";
import ProjectsPage from "./pages/projects/Projects";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/* <Route component={Error} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
