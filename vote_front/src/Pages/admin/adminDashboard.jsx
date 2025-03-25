// AdminDashboard.jsx (optimized layout)
import AdminSideNav from "../../Components/navigation/AdminSideNav";
import { FiCalendar, FiUsers, FiBarChart2, FiSettings } from "react-icons/fi";

const AdminDashboard = () => {
  const adminUser = {
    name: "Admin User",
    email: "admin@example.com",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navigation - Fixed full height */}
      <div className="fixed left-0 top-0 bottom-0 w-64">
        <AdminSideNav userData={adminUser} />
      </div>

      {/* Main Content Area - Full height with proper spacing */}
      <main className="flex-1 ml-64 min-h-screen p-8 overflow-y-auto">
        {/* Header Section */}
        <header className="mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome back, {adminUser.name}</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Active Elections"
            value="3"
            icon={<FiCalendar className="text-blue-500" size={22} />}
            accent="blue"
          />
          <StatCard
            title="Registered Candidates"
            value="24"
            icon={<FiUsers className="text-green-500" size={22} />}
            accent="green"
          />
          <StatCard
            title="Total Votes"
            value="1,245"
            icon={<FiBarChart2 className="text-purple-500" size={22} />}
            accent="purple"
          />
        </div>

        {/* Divider */}
        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-50 text-sm text-gray-500">
              Quick Actions
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <ActionButton
            icon={<FiCalendar size={18} />}
            text="Manage Elections"
            variant="primary"
          />
          <ActionButton
            icon={<FiUsers size={18} />}
            text="Candidate Management"
            variant="secondary"
          />
          <ActionButton
            icon={<FiBarChart2 size={18} />}
            text="View Results"
            variant="secondary"
          />
          <ActionButton
            icon={<FiSettings size={18} />}
            text="System Settings"
            variant="secondary"
          />
        </div>
      </main>
    </div>
  );
};

// StatCard Component (optimized)
const StatCard = ({ title, value, icon, accent }) => {
  const accentMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-300",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      hoverBorder: "hover:border-green-300",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      hoverBorder: "hover:border-purple-300",
    },
  };

  const { bg, text, border, hoverBorder } = accentMap[accent];

  return (
    <div
      className={`${bg} ${border} ${hoverBorder} p-6 rounded-xl transition-all hover:shadow-md`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${bg}`}>{icon}</div>
      </div>
      <div
        className={`${text} text-sm font-medium mt-4 inline-flex items-center`}
      >
        View details
        <svg
          className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

// ActionButton Component (optimized)
const ActionButton = ({ icon, text, variant = "secondary" }) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary:
      "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600",
  };

  return (
    <button
      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 min-w-[200px] justify-center ${variantStyles[variant]}`}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default AdminDashboard;
