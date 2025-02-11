import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {email: form.email, password: form.password});
      console.log("Login Successful:", res.data);
    } catch (error) {
      console.error(
        "Login Failed:",
        error.response?.data?.message || error.message
      );
    }
  };                                                

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-red-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-4 border-yellow-700">
        <h2 className="text-center text-2xl font-bold text-yellow-800 mb-4">
          🔱 Sanatani Login 🔱
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-yellow-900 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-yellow-900 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-900 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
