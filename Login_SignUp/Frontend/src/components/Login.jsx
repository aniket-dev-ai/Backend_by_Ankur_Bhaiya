import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        alert(res.data.message); // User feedback
        setForm({ name: "", email: "", password: "" }); // Form reset
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Registration failed");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-saffron to-gold">
      <div className="bg-white shadow-xl p-8 rounded-lg max-w-sm w-full border-4 border-darkRed">
        <h2 className="text-center text-2xl font-bold text-darkRed mb-4">
          🔱 जय श्री राम 🔱
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-darkRed font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border border-darkRed rounded-lg focus:ring-2 focus:ring-saffron"
              required
            />
          </div>
          <div>
            <label className="block text-darkRed font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border border-darkRed rounded-lg focus:ring-2 focus:ring-saffron"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-darkRed text-white p-2 rounded-lg font-bold hover:bg-saffron transition duration-300"
          >
            Login
          </button>
        </form>
        <Link to={"/SignUp"}>
          <p className="text-center text-sm text-darkRed mt-4">
            नया उपयोगकर्ता? <span className="text-blue-600">साइन अप करें</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
