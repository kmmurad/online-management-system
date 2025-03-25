import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa"; // Import icons

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      alert("Login successful!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Container for Image and Login Card */}
      <div
        className="w-full max-w-4xl flex bg-white rounded-2xl shadow-2xl overflow-hidden -mt-10"
        style={{ maxHeight: "530px" }}
      >
        {/* Voting Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/voting-bg.jpg" // Path to the image in the public folder
            alt="Voting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Card Section */}
        <div className="w-full md:w-1/2 bg-white/30 backdrop-blur-lg p-6 flex flex-col justify-center">
          {/* Heading with Icon */}
          <div className="flex flex-col items-center mb-4">
            <div className="p-3 bg-blue-500 rounded-full shadow-lg">
              <FaSignInAlt className="text-2xl text-white" /> {/* Login Icon */}
            </div>
            <h1 className="mt-3 text-xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Login to access your account
            </p>
          </div>

          {/* Username Field */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Username Icon */}
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Password Icon */}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <FaSignInAlt className="mr-2" /> {/* Login Icon */}
            Login
          </button>

          {/* Register Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-600 hover:underline transition duration-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
