import { useState } from "react";
import axios from "axios";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setMessage(""); // Reset message on toggle
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    const endpoint = isRegister ? "register" : "login";
    const data = isRegister ? { name, email, password } : { email, password };

    try {
      const response = await axios.post(`http://localhost:5000/${endpoint}`, data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>

        {message && <p className="text-center text-red-400 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={toggleForm}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
