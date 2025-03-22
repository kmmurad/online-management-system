import React from "react";
import {
  FaBullseye,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaHandshake,
} from "react-icons/fa"; // Import icons

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          About Us
        </h1>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-3xl text-blue-600 mr-4" />{" "}
            {/* Mission Icon */}
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-600">
            At Election Management System, our mission is to ensure fair,
            transparent, and secure elections. We provide a platform that
            empowers voters, candidates, and administrators to participate in
            the democratic process with confidence.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-3xl text-blue-600 mr-4" />{" "}
            {/* Offer Icon */}
            <h2 className="text-2xl font-semibold text-gray-800">
              What We Offer
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2 flex items-center">
              <FaUsers className="text-blue-600 mr-2" />{" "}
              {/* Icon for each point */}
              Secure and easy voting for all users.
            </li>
            <li className="mb-2 flex items-center">
              <FaChartLine className="text-blue-600 mr-2" />
              Real-time election results and analytics.
            </li>
            <li className="mb-2 flex items-center">
              <FaCogs className="text-blue-600 mr-2" />
              Tools for candidates to manage their campaigns.
            </li>
            <li className="mb-2 flex items-center">
              <FaHandshake className="text-blue-600 mr-2" />
              Admin tools for managing elections and users.
            </li>
          </ul>
        </div>

        {/* Our Team Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <FaUsers className="text-3xl text-blue-600 mr-4" />{" "}
            {/* Team Icon */}
            <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          </div>
          <p className="text-gray-600">
            Our team is made up of passionate individuals dedicated to improving
            the election process. We believe in the power of technology to
            create a more inclusive and democratic society.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaHandshake className="text-3xl text-blue-600 mr-4" />{" "}
            {/* Choose Us Icon */}
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Choose Us?
            </h2>
          </div>
          <p className="text-gray-600">
            We are committed to providing a reliable and user-friendly platform
            that ensures every vote counts. Our system is designed to be
            accessible, secure, and efficient, making it the ideal choice for
            modern elections.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
