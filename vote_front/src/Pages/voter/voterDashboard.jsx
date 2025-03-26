import React from "react";
import VoterSideNav from "../../Components/navigation/VoterSideNav";
import {
  FaVoteYea,
  FaChartBar,
  FaUser,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoterDashboard = () => {
  const navigate = useNavigate();

  // Mock data - replace with your actual data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    studentId: "STU12345",
    electionsVoted: 2,
    electionsActive: 1,
    electionsCompleted: 3,
  };

  const dashboardCards = [
    {
      title: "Active Elections",
      count: userData.electionsActive,
      icon: <FaClock className="text-blue-500 text-2xl" />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      action: () => navigate("/voter/active-elections"),
    },
    {
      title: "Vote Now",
      count: userData.electionsActive > 0 ? "Available" : "None",
      icon: <FaVoteYea className="text-green-500 text-2xl" />,
      color: "bg-green-50",
      textColor: "text-green-600",
      action: () => {
        if (userData.electionsActive > 0) {
          navigate("/voter/active-elections");
        } else {
          toast.info("No active elections available");
        }
      },
    },
    {
      title: "Election Results",
      count: userData.electionsCompleted,
      icon: <FaChartBar className="text-purple-500 text-2xl" />,
      color: "bg-purple-50",
      textColor: "text-purple-600",
      action: () => navigate("/voter/results"),
    },
    {
      title: "My Profile",
      count: "View",
      icon: <FaUser className="text-indigo-500 text-2xl" />,
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      action: () => navigate("/voter/profile"),
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 bg-white shadow-lg">
        <VoterSideNav activePage="dashboard" />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Welcome back,{" "}
              <span className="text-blue-600">{userData.name}</span>
            </h1>
            <p className="mt-2 text-gray-600">
              Here's what's happening with your voting activities
            </p>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardCards.map((card, index) => (
              <div
                key={index}
                onClick={card.action}
                className={`${card.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-gray-200`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {card.title}
                    </p>
                    <h3
                      className={`mt-2 text-2xl font-semibold ${card.textColor}`}
                    >
                      {card.count}
                    </h3>
                  </div>
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Activity
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View All
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start pb-4 border-b border-gray-100">
                <div className="p-2 bg-green-50 rounded-lg mr-4">
                  <FaCheckCircle className="text-green-500 text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Voted in Student Council Election
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2 days ago</p>
                </div>
              </div>

              <div className="flex items-start pb-4 border-b border-gray-100">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <FaClock className="text-blue-500 text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Class Representative Election is active
                  </p>
                  <p className="text-sm text-gray-500 mt-1">5 days ago</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-purple-50 rounded-lg mr-4">
                  <FaChartBar className="text-purple-500 text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Results published for Sports Committee
                  </p>
                  <p className="text-sm text-gray-500 mt-1">1 week ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button
                onClick={() => navigate("/voter/active-elections")}
                className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaVoteYea className="text-blue-500 mr-3" />
                <span>Cast Your Vote</span>
              </button>
              <button
                onClick={() => navigate("/voter/results")}
                className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaChartBar className="text-purple-500 mr-3" />
                <span>View Results</span>
              </button>
              <button
                onClick={() => navigate("/voter/profile")}
                className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaUser className="text-indigo-500 mr-3" />
                <span>Update Profile</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default VoterDashboard;
