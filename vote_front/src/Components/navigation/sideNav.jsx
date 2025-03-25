import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiPieChart,
  FiSettings,
  FiMessageSquare,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center px-3 py-2.5 text-sm rounded-lg transition-colors
      ${
        isActive
          ? "bg-indigo-50 text-indigo-700 font-medium"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }
    `}
    end
  >
    <span className="mr-3 text-lg">{icon}</span>
    {label}
  </NavLink>
);

const SideNav = ({ userRole = "voter", userData = {} }) => {
  // Navigation items configuration with additional metadata
  const navConfig = {
    admin: {
      items: [
        { to: "/admin/dashboard", icon: <FiHome />, label: "Dashboard" },
        { to: "/admin/elections", icon: <FiCalendar />, label: "Elections" },
        { to: "/admin/candidates", icon: <FiUsers />, label: "Candidates" },
        { to: "/admin/voters", icon: <FiUsers />, label: "Voters" },
        { to: "/admin/results", icon: <FiPieChart />, label: "Results" },
        { to: "/admin/messages", icon: <FiMessageSquare />, label: "Messages" },
        { to: "/admin/settings", icon: <FiSettings />, label: "Settings" },
      ],
      brandName: "Admin Portal",
      brandIcon: "A",
    },
    candidate: {
      items: [
        { to: "/candidate/dashboard", icon: <FiHome />, label: "Dashboard" },
        {
          to: "/candidate/elections",
          icon: <FiCalendar />,
          label: "My Elections",
        },
        { to: "/candidate/profile", icon: <FiUser />, label: "My Profile" },
        { to: "/candidate/results", icon: <FiPieChart />, label: "Results" },
      ],
      brandName: "Candidate Portal",
      brandIcon: "C",
    },
    voter: {
      items: [
        { to: "/voter/dashboard", icon: <FiHome />, label: "Dashboard" },
        {
          to: "/voter/elections",
          icon: <FiCalendar />,
          label: "Active Elections",
        },
        { to: "/voter/vote", icon: <FiCheckCircle />, label: "Cast Vote" },
        { to: "/voter/results", icon: <FiPieChart />, label: "View Results" },
      ],
      brandName: "Voter Portal",
      brandIcon: "V",
    },
  };

  // Get configuration for current user role
  const { items, brandName, brandIcon } =
    navConfig[userRole] || navConfig.voter;

  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      {/* Logo/Branding */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold">{brandIcon}</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">
            {brandName}
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-600 font-medium">
              {userData?.name?.substring(0, 2).toUpperCase() || "US"}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">
              {userData?.name || "User"}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {userRole || "user"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
