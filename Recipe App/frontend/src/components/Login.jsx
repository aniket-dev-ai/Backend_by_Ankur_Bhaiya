import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email aur Password zaroori hai!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
        { withCredentials: true }
      );
      console.log("Login Successful!", response.data.user.fullName);
      // Redirect ya kuch aur action
      props.setname(response.data.user.fullName);
      console.log(props.name);
      props.setlogged(true);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials! Dubara check karein." ,err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-96 border border-white/20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-4">
          Welcome Back! 🎉
        </h2>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-none rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border-none rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login 🚀"}
          </button>
        </form>
        <p className="text-center text-white/80 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-300 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
