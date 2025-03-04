import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/project/create", formData);  // API Proxy Setup honi chahiye
      alert(`Project Created Successfully 🥳: ${res.data.message}`);
      setFormData({ name: "", code: "" });
      navigate("/");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project 😔");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#e2d1c3] flex flex-col items-center justify-center text-gray-800">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-6 bg-white/30 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50">
        <h1 className="text-xl font-bold text-pink-600">Sexy Dashboard 💖</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-pink-600 hover:text-purple-600 font-medium">View Profile</a>
          <a href="#" className="text-pink-600 hover:text-purple-600 font-medium">Logout</a>
        </div>
      </nav>

      {/* Form Card */}
      <div className="mt-20 w-full max-w-2xl bg-white/70 backdrop-blur-lg rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Create Your Dream Project 💼✨</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700">Project Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your project's sexy name 😉"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Project Code:</label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter secret project code 🔐"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-3 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            🚀 Launch Project
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 py-4 text-sm text-gray-600">
        Made with ❤️ by Aniket Srivastava (Future CEO 😉)
      </footer>
    </div>
  );
};

export default FormPage;
