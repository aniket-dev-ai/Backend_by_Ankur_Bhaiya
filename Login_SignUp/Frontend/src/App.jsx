import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Homepage from "./components/HomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Homepage />
    </div>
  );
}

export default App;
