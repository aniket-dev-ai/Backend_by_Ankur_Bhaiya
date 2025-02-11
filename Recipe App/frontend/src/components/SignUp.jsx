import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    bio: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid Email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be 6+ chars";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms";
    return newErrors;
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    console.log(formData);
    await axios
      .post("http://localhost:5000/register", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        username: formData.username,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        dob: formData.dob,
        gender: formData.gender,
        bio: formData.bio,
        termsAccepted: formData.termsAccepted,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-lg border border-white/30">
      <p className="text-center text-white/80 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-300 font-semibold hover:underline">
            Login up
          </Link>
        </p>
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          ✨ Create an Account ✨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
            {errors.fullName && (
              <p className="text-red-300 text-xs">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-300 text-xs">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-300 text-xs">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-300 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-lg text-white focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-5 w-5 text-purple-400"
            />
            <label className="ml-2 text-white text-sm">
              I accept the terms and conditions
            </label>
            {errors.termsAccepted && (
              <p className="text-red-300 text-xs">{errors.termsAccepted}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-3 rounded-lg hover:shadow-lg hover:from-indigo-500 hover:to-purple-400 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
