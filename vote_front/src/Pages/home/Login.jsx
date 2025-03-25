import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import Navbar from "../../Components/home_component/Navbar";
import Footer from "../../Components/home_component/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      axios
        .post("http://localhost:5000/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data.success) {
            toast.success("Login successful!");
            setTimeout(() => {
              navigate("/admin");
            }, 2000);
            localStorage.setItem("user", JSON.stringify(res.data.data)); // Store user data in localStorage
          } else {
            toast.error("Incorrect username or password");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          toast.error("An error occurred during login");
        });
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div
          className="w-full max-w-4xl flex bg-white rounded-2xl shadow-2xl overflow-hidden -mt-10"
          style={{ maxHeight: "530px" }}
        >
          <div className="w-1/2 hidden md:block">
            <img
              src="/voting-bg.jpg"
              alt="Voting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 bg-white/30 backdrop-blur-lg p-6 flex flex-col justify-center">
            <div className="flex flex-col items-center mb-4">
              <div className="p-3 bg-blue-500 rounded-full shadow-lg">
                <FaSignInAlt className="text-2xl text-white" />
              </div>
              <h1 className="mt-3 text-xl font-bold text-gray-800">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Login to access your account
              </p>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <FaSignInAlt className="mr-2" />
              Login
            </button>

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
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Login;
