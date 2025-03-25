import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(/home.jpg)`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Ensure the image covers the viewport height
      }}
    >
      {/* Overlay to make text readable (darker overlay) */}
      <div className="absolute inset-0 bg-black bg-opacity-65 z-0"></div>

      {/* Main Content */}
      <div className="text-center  relative z-10">
        {/* Heading */}
        <h1 className="text-6xl font-bold mb-4 text-white">
          LET'S <span className="text-blue-400">VOTE</span>
        </h1>
        <h2 className="text-3xl font-semibold mb-8 text-white">
          Be Part Of Decision
        </h2>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
