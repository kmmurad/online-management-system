import VoterSideNav from "../../Components/navigation/VoterSideNav";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaCalendarAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaLock,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoterProfiles = () => {
  // State management
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    joinDate: "",
  });

  // Mock data initialization
  useEffect(() => {
    const loadMockData = () => {
      const mockUser = {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        studentId: "STU12345",
        joinDate: new Date().toISOString().split("T")[0],
      };

      setUserData(mockUser);
      setFormData(mockUser);
    };

    loadMockData();
  }, []);

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      setUserData(formData);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleEditMode = () => setIsEditing(!isEditing);

  // Loading state
  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-56 bg-white shadow-lg md:block">
        <VoterSideNav activePage="profile" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl mx-auto">
          {/* Profile Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <p className="mt-2 text-gray-600">
              Manage your personal information and account settings
            </p>
          </header>

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Profile Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-32 relative">
              <div className="absolute -bottom-16 left-6">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center">
                  <FaUser className="text-5xl text-blue-500" />
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-20 px-6 pb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {userData.name}
                </h2>
                <p className="text-blue-500">{userData.email}</p>
              </div>

              {isEditing ? (
                // Edit Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ProfileField
                      icon={<FaUser className="text-blue-500" />}
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text"
                      required
                    />

                    <ProfileField
                      icon={<FaEnvelope className="text-blue-500" />}
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      required
                    />

                    <ProfileField
                      icon={<FaIdCard className="text-blue-500" />}
                      label="Student ID"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      type="text"
                      required
                    />

                    <div className="relative">
                      <ProfileField
                        icon={<FaCalendarAlt className="text-blue-500" />}
                        label="Member Since"
                        name="joinDate"
                        value={formData.joinDate}
                        onChange={handleInputChange}
                        type="date"
                        disabled
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6 text-gray-400">
                        <FaLock />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={toggleEditMode}
                      className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      disabled={isSubmitting}
                    >
                      <FaTimes className="mr-2" />
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      <FaSave className="mr-2" />
                      {isSubmitting ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              ) : (
                // View Mode
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ProfileInfo
                      icon={<FaUser className="text-blue-500" />}
                      label="Full Name"
                      value={userData.name}
                    />

                    <ProfileInfo
                      icon={<FaEnvelope className="text-blue-500" />}
                      label="Email Address"
                      value={userData.email}
                    />

                    <ProfileInfo
                      icon={<FaIdCard className="text-blue-500" />}
                      label="Student ID"
                      value={userData.studentId}
                    />

                    <ProfileInfo
                      icon={<FaCalendarAlt className="text-blue-500" />}
                      label="Member Since"
                      value={new Date(userData.joinDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    />
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={toggleEditMode}
                      className="flex items-center justify-center w-full px-4 py-2.5 text-white bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 transition-colors"
                    >
                      <FaEdit className="mr-2" />
                      Edit Profile
                    </button>
                  </div>
                </div>
              )}
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

// Reusable Profile Field Component
const ProfileField = ({ icon, label, ...props }) => (
  <div className="space-y-2">
    <label className="flex items-center text-sm font-medium text-gray-700">
      <span className="mr-2">{icon}</span>
      {label}
    </label>
    <input
      className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      {...props}
    />
  </div>
);

// Reusable Profile Info Component
const ProfileInfo = ({ icon, label, value }) => (
  <div className="flex items-start">
    <span className="mt-1 mr-3 text-blue-500">{icon}</span>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default VoterProfiles;
