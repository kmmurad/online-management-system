import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaPhone,
  FaCalendar,
  FaUserPlus,
} from "react-icons/fa"; // Import icons

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userType, setUserType] = useState("voter");

  const handleRegister = () => {
    if (
      fullName &&
      email &&
      password &&
      reEnterPassword &&
      mobile &&
      nationalId &&
      dateOfBirth
    ) {
      if (password !== reEnterPassword) {
        alert("Passwords do not match.");
        return;
      }
      alert(`Registered as ${userType}: ${fullName}`);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  p-4">
      <div className="bg-white -mt-10 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Heading with Icon */}
        <div className="flex items-center justify-center mb-4">
          <FaUserPlus className="text-2xl text-blue-600 mr-2" />{" "}
          {/* Register Icon */}
          <h1 className="text-2xl font-bold text-blue-600">Register</h1>
        </div>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Full Name Icon */}
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Email Icon */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
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
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Re-enter Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Re-enter Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Re-enter Password Icon */}
              <input
                type="password"
                placeholder="Re-enter your password"
                value={reEnterPassword}
                onChange={(e) => setReEnterPassword(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Mobile Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Mobile Icon */}
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* National ID Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              National ID
            </label>
            <div className="relative">
              <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* National ID Icon */}
              <input
                type="text"
                placeholder="Enter your national ID"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Date of Birth Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <div className="relative">
              <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Date of Birth Icon */}
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* User Type Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="voter">Voter</option>
              <option value="candidate">Candidate</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center mt-4 text-sm"
        >
          <FaUserPlus className="mr-2" /> {/* Register Icon */}
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-3 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
