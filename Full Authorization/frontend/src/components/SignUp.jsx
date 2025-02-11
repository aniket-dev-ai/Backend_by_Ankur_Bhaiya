import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [Form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    role: "Ram Bhakt",
  });

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        email: Form.email,
        name: Form.name,
        password: Form.password,
        role: Form.role,
      });

      console.log("Response:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert("Signup failed! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-red-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-4 border-yellow-700">
        <h2 className="text-center text-2xl font-bold text-yellow-800 mb-4">
          🔱 Sanatani Signup 🔱
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-yellow-900 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={Form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-yellow-900 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={Form.name}
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
              value={Form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-yellow-900 font-semibold">Role</label>
            <select
              name="role"
              value={Form.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            >
              <option value="Ram Bhakt">Ram Bhakt</option>
              <option value="Krishna Bhakt">Krishna Bhakt</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-900 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
