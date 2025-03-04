import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Sample Projects Array
// const projects = [
//     "Sexy UI Project 💅",
//     "AI Lover Bot 🤖❤️",
//     "E-Commerce Bliss 🛍️",
//     "Portfolio Pro 🧑‍💻",
//     "Coding Bootcamp Tracker 📚",
//     "Fitness App Tracker 💪",
// ];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/v1/project/getAll"); // no localhost:6000 needed
        console.log(res.data.projects);
        setProjects(res.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] to-[#e2d1c3] min-h-screen flex flex-col items-center text-gray-800">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-6 bg-white/30 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50">
        <h1 className="text-xl font-bold text-pink-600">Sexy Dashboard</h1>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-pink-500 font-bold"
          >
            ☰
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-pink-600 hover:text-purple-600 font-medium"
          >
            View Profile
          </a>
          <a
            href="#"
            className="text-pink-600 hover:text-purple-600 font-medium"
          >
            Logout
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full flex flex-col items-center bg-white/30 backdrop-blur-lg p-4 space-y-4 z-40">
          <a
            href="#"
            className="text-pink-600 hover:text-purple-600 font-medium"
          >
            View Profile
          </a>
          <a
            href="#"
            className="text-pink-600 hover:text-purple-600 font-medium"
          >
            Logout
          </a>
        </div>
      )}

      {/* Create Project Button */}
      <Link to={"/create"}>
      <button className="mt-24 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
        + Create New Project 💼
      </button>
      </Link>

      {/* Project List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl bg-white/50"
          >
            <Link to={"/collab"}>
            <h3 className="text-lg font-semibold text-gray-900">
              {project.name}
            </h3></Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 py-4 text-sm text-gray-600">
        Made with ❤️ by Aniket Srivastava (Future CEO 😉)
      </footer>
    </div>
  );
}
