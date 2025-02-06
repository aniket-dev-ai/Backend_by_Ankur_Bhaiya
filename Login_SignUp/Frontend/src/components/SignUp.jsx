import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        name: form.name,
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
          ✨ जय श्री राम ✨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-darkRed font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border border-darkRed rounded-lg focus:ring-2 focus:ring-saffron"
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
