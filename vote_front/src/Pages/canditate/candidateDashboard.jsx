// CandidateDashboard.jsx
import { useState } from "react";
import {
  FiUser,
  FiAward,
  FiBarChart2,
  FiMail,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import CandidateSideNav from "../../Components/navigation/CandidateSideNav";

const CandidateDashboard = () => {
  const [dashboardData] = useState({
    candidate: {
      name: "Alex Johnson",
      position: "President",
      election: "Student Council 2023",
      status: "Active",
      photo: null,
      bio: "3rd year Computer Science student passionate about student rights",
      campaignSlogan: "Building a better campus for all students",
      campaignPromises: [
        "Improved student lounge facilities",
        "Extended library hours during exams",
        "More student representation",
        "Free printing credits",
      ],
    },
    stats: {
      votes: 215,
      totalVoters: 500,
      daysLeft: 12,
      votePercentage: 43,
    },
    messages: [
      {
        id: 1,
        sender: "Election Committee",
        subject: "Debate Schedule Confirmation",
        date: "2 hours ago",
        read: false,
      },
      {
        id: 2,
        sender: "Campaign Team",
        subject: "Poster Design Approval",
        date: "1 day ago",
        read: true,
      },
    ],
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Side Navigation */}
      <div className="fixed left-0 top-0 bottom-0 z-10">
        <CandidateSideNav userData={dashboardData.candidate} />
      </div>

      {/* Main Content with proper spacing */}
      <main className="flex-1 ml-64 min-h-screen p-6 md:p-8 overflow-y-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
            Candidate Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back, {dashboardData.candidate.name}
          </p>
        </header>

        {/* Status Banner */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Running for{" "}
                <span className="text-indigo-600">
                  {dashboardData.candidate.position}
                </span>
              </h2>
              <p className="text-gray-600">
                {dashboardData.candidate.election}
              </p>
            </div>
            <div className="mt-3 md:mt-0">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  dashboardData.candidate.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {dashboardData.candidate.status} Campaign
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <StatCard
            title="Days Left"
            value={dashboardData.stats.daysLeft}
            icon={<FiClock className="text-blue-500" />}
            accent="blue"
          />
          <StatCard
            title="Your Votes"
            value={`${dashboardData.stats.votes} (${dashboardData.stats.votePercentage}%)`}
            icon={<FiUser className="text-indigo-500" />}
            accent="indigo"
          />
          <StatCard
            title="Total Voters"
            value={dashboardData.stats.totalVoters}
            icon={<FiUsers className="text-purple-500" />}
            accent="purple"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Campaign Info */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FiAward className="mr-2 text-indigo-600" /> Campaign Info
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Slogan</h3>
                <p className="text-gray-600 italic">
                  "{dashboardData.candidate.campaignSlogan}"
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Key Promises</h3>
                <ul className="space-y-2">
                  {dashboardData.candidate.campaignPromises.map(
                    (promise, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{promise}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FiMail className="mr-2 text-indigo-600" /> Messages
            </h2>
            <div className="space-y-3">
              {dashboardData.messages.map((message) => (
                <MessageItem key={message.id} message={message} />
              ))}
              <button className="w-full mt-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                View All Messages →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Reusable Components
const StatCard = ({ title, value, icon, accent }) => {
  const accentColors = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
    },
  };

  return (
    <div
      className={`${accentColors[accent].bg} ${accentColors[accent].border} border p-5 rounded-xl`}
    >
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-white mr-4 shadow-sm">{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

const MessageItem = ({ message }) => (
  <div
    className={`p-3 rounded-lg ${
      !message.read ? "bg-indigo-50" : "hover:bg-gray-50"
    }`}
  >
    <div className="flex justify-between items-start">
      <h4
        className={`font-medium ${
          !message.read ? "text-indigo-800" : "text-gray-800"
        }`}
      >
        {message.sender}
      </h4>
      <span className="text-xs text-gray-400">{message.date}</span>
    </div>
    <p
      className={`text-sm ${
        !message.read ? "text-indigo-600" : "text-gray-600"
      }`}
    >
      {message.subject}
    </p>
    {!message.read && (
      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
        New
      </span>
    )}
  </div>
);

export default CandidateDashboard;
