import { NavLink } from "react-router-dom";

const Home = (props) => {
  console.log(props.name);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6">
      <nav className="absolute top-5 left-0 right-0 flex justify-between items-center px-10 py-3 bg-white/10 backdrop-blur-lg rounded-xl mx-5 shadow-md">
        <h1 className="text-2xl font-extrabold">🌟 MyApp</h1>
        {props.logged ? (
          <div className="space-x-6">
            <NavLink to="/login" className="hover:text-yellow-300 transition">
              Login
            </NavLink>
            <NavLink to="/signup" className="hover:text-green-300 transition">
              Sign Up
            </NavLink>
          </div>
        ) : (
          <div className="space-x-6">
            <NavLink to="/login" className="hover:text-yellow-300 transition">
              Welcome
            </NavLink>
            <NavLink to="/signup" className="hover:text-green-300 transition">
              {props.name}
            </NavLink>
          </div>
        )}
      </nav>

      <div className="text-center mt-10">
        <h1 className="text-5xl font-extrabold tracking-wide animate-fade-in">
          Welcome to <span className="text-yellow-300">MyApp</span> 🚀
        </h1>
        <p className="text-lg mt-3 opacity-80">
          The best place to explore, learn, and grow. Join us now!
        </p>
      </div>

      <div className="mt-10 flex space-x-6">
        <NavLink
          to="/explore"
          className="bg-white/20 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-white/30 transition transform hover:scale-105"
        >
          Explore 🔍
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition transform hover:scale-105"
        >
          Get Started 🚀
        </NavLink>
      </div>

      <div className="absolute bottom-5 text-sm opacity-70">
        Made with ❤️ by <span className="font-semibold">Aniket Srivastava</span>
      </div>
    </div>
  );
};

export default Home;
