import React, { useState } from "react";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [logged, setlogged] = useState(false);
  const [name, setname] = useState("");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home logged={logged} name={name} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login setlogged={setlogged} setname={setname} name={name} />}
        />
      </Routes>
    </div>
  );
}

export default App;
