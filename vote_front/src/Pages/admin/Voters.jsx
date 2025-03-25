import { useState } from "react";
import AdminSideNav from "../../Components/navigation/AdminSideNav";
import { FiPlus, FiEdit, FiTrash2, FiUser, FiSearch } from "react-icons/fi";

const AdminVoters = () => {
  // State management
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [voters, setVoters] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      studentId: "ST2023001",
      email: "alex.j@university.edu",
      verified: true,
    },
    {
      id: 2,
      name: "Sam Wilson",
      studentId: "ST2023002",
      email: "sam.w@university.edu",
      verified: false,
    },
  ]);

  const [newVoter, setNewVoter] = useState({
    name: "",
    studentId: "",
    email: "",
  });

  // Filter voters based on search term
  const filteredVoters = voters.filter(
    (voter) =>
      voter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      voter.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      voter.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add new voter
  const handleAddVoter = () => {
    const newId =
      voters.length > 0 ? Math.max(...voters.map((v) => v.id)) + 1 : 1;
    setVoters([...voters, { ...newVoter, id: newId, verified: false }]);
    setNewVoter({ name: "", studentId: "", email: "" });
    setIsFormOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Side Navigation */}
      <div className="fixed left-0 top-0 bottom-0 w-64 z-10">
        <AdminSideNav />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen p-6 md:p-8 overflow-y-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
            Voter Management
          </h1>
          <p className="text-gray-600 mt-1">Manage all registered voters</p>
        </header>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search voters..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <FiPlus className="text-lg" />
            Add Voter
          </button>
        </div>

        {/* Voters Table Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {filteredVoters.length > 0 ? (
            <>
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-5 bg-gray-50 border-b font-medium text-gray-600 uppercase text-sm">
                <div className="col-span-5 md:col-span-4">Voter</div>
                <div className="col-span-4 md:col-span-3">Student ID</div>
                <div className="col-span-3 md:col-span-3">Email</div>
                <div className="col-span-2 text-right">Status</div>
              </div>

              {/* Voters List */}
              <div className="divide-y divide-gray-100">
                {filteredVoters.map((voter) => (
                  <div
                    key={voter.id}
                    className="grid grid-cols-12 gap-4 p-5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="col-span-5 md:col-span-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <FiUser />
                      </div>
                      <span className="font-medium truncate">{voter.name}</span>
                    </div>
                    <div className="col-span-4 md:col-span-3 flex items-center text-gray-600 truncate">
                      {voter.studentId}
                    </div>
                    <div className="col-span-3 text-gray-600 truncate">
                      {voter.email}
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          voter.verified
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {voter.verified ? "Verified" : "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <EmptyState onCreate={() => setIsFormOpen(true)} />
          )}
        </div>

        {/* Add Voter Modal */}
        {isFormOpen && (
          <AddVoterModal
            newVoter={newVoter}
            setNewVoter={setNewVoter}
            onAddVoter={handleAddVoter}
            onClose={() => setIsFormOpen(false)}
          />
        )}
      </main>
    </div>
  );
};

// Empty State Component
const EmptyState = ({ onCreate }) => (
  <div className="p-12 text-center">
    <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
      <FiUser size={28} />
    </div>
    <h3 className="text-xl font-medium text-gray-800 mb-2">
      {voters.length === 0
        ? "No voters registered"
        : "No matching voters found"}
    </h3>
    <p className="text-gray-500 mb-6">
      {voters.length === 0
        ? "Get started by registering your first voter"
        : "Try adjusting your search query"}
    </p>
    <button
      onClick={onCreate}
      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-all"
    >
      Register Voter
    </button>
  </div>
);

// Add Voter Modal Component
const AddVoterModal = ({ newVoter, setNewVoter, onAddVoter, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
      {/* Modal Header */}
      <div className="border-b p-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Register New Voter</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
      </div>

      {/* Form Content */}
      <div className="p-6">
        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={newVoter.name}
              onChange={(e) =>
                setNewVoter({ ...newVoter, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter voter's full name"
              required
            />
          </div>

          {/* Student ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={newVoter.studentId}
              onChange={(e) =>
                setNewVoter({ ...newVoter, studentId: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter student ID"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={newVoter.email}
              onChange={(e) =>
                setNewVoter({ ...newVoter, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onAddVoter}
              disabled={
                !newVoter.name || !newVoter.studentId || !newVoter.email
              }
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Register Voter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default AdminVoters;
