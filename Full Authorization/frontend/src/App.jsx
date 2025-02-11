import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route pat></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}