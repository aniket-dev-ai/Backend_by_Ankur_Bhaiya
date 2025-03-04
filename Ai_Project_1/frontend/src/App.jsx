import React from "react";
import HomePage from "./Pages/HomePage";
import CreateProjects from "./Pages/CreateProjects";
import { Route, Router, Routes } from "react-router-dom";
import Collab from "./Pages/Collab";

function App() {
  return (
    <>
      {/* <Collab /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProjects />} />
        <Route path="/collab" element={<Collab />} />
      </Routes>
      {/* <HomePage />
      <CreateProjects /> */}
    </>
  );
}

export default App;
