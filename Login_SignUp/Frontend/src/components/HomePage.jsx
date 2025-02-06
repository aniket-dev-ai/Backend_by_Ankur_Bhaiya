import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-saffron to-gold p-6">
      <div className="bg-white shadow-xl p-8 rounded-lg max-w-md w-full border-4 border-darkRed text-center">
        <h1 className="text-3xl font-bold text-darkRed mb-4">🕉️ श्रीमद्भगवद्गीता 🕉️</h1>
        <p className="text-lg text-darkRed font-semibold mb-4">
          "You have the right to perform your duty, but never to its fruits." <br />
          <span className="text-gray-700 italic">- Bhagavad Gita 2:47</span>
        </p>
        <p className="text-md text-gray-800 mb-6">
          Follow the path of righteousness, and let actions guide you. 
          Choose your journey below to begin.
        </p>
        <div className="flex justify-between">
          <Link to="/SignUp" className="w-1/2 text-center bg-darkRed text-white p-2 rounded-lg font-bold hover:bg-saffron transition duration-300 mr-2">
            Sign Up
          </Link>
          <Link to="/Login" className="w-1/2 text-center bg-darkRed text-white p-2 rounded-lg font-bold hover:bg-saffron transition duration-300 ml-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
